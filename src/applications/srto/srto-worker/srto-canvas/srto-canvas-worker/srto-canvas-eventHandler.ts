import { RefObject, SetStateAction } from "react"
import { SimRailDataTypes } from "../../../../../types/simrail-data-types"
import { SRTO_DataTypes } from "../../srto-data/srto-dataTypes"
import { USER_OPTIONS } from "../../../srto"
import { RenderOptionsProps } from "../../../srto"
import { HoveredTargetType } from "../srto-canvas"
import { SIGNAL_BASE_PATH, TRAIN_BASE_PATH } from "./srto-canvas-drawer"

interface CanvasSettingsProps {
    CANVAS_WORLD_WIDTH: number,
    CANVAS_WORLD_HEIGHT: number,
    MIN_ZOOM_FIT: number,
    MIN_ZOOM_EXTENDED: number,
    MAX_ZOOM: number,
    TOOLTIP_MARGIN: number,
    TOOLTIP_OFFSET: number,
}

interface HandlerProps {
        trainList: SimRailDataTypes.FilteredTrainList[],
        stationList: SimRailDataTypes.StationData[]
        userOptions: typeof USER_OPTIONS
        devRenderOptions: RenderOptionsProps
}

interface viewRefProp {
    zoom: number,
    panX: number,
    panY: number
}

interface CanvasEventHandlerProps {
    canvasRef: React.RefObject<HTMLCanvasElement | null>
    viewRef: React.RefObject<viewRefProp>
    dragRef: React.RefObject<{ isDragging: boolean; lastX: number; lastY: number }>
    scheduleDraw: () => void
    SRTO_PROPS: HandlerProps
    signalDataRef?: React.RefObject<SRTO_DataTypes.SIGNAL[]>
    canvasSettings: CanvasSettingsProps,
    minZoomRef: React.RefObject<number>
    mouseWorldPosRef?: React.RefObject<{ x: number, y: number } | null>
    setMouseWorldPos?: React.Dispatch<SetStateAction<{ x: number, y: number } | null>>
    hoveredTargetRef?: React.RefObject<HoveredTargetType>
    setHoveredTarget?: React.Dispatch<SetStateAction<HoveredTargetType>>,
    trainHoverEntries?: {train: SimRailDataTypes.FilteredTrainList, signal: SRTO_DataTypes.SIGNAL}[]
}

export function createCanvasEventHandler(deps: CanvasEventHandlerProps) {

    const canvasRef = deps.canvasRef
    const viewRef = deps.viewRef
    const dragRef = deps.dragRef
    const scheduleDraw = deps.scheduleDraw
    const SRTO_PROPS = deps.SRTO_PROPS
    const CanvasSettings = deps.canvasSettings

    function clampViewToBounds(rect: DOMRect) {

        if (SRTO_PROPS.userOptions.allowExtendedView) return

        const fitScale = rect.width / CanvasSettings.CANVAS_WORLD_WIDTH
        const scale = fitScale * viewRef.current.zoom

        const scaledWorldWidth = CanvasSettings.CANVAS_WORLD_WIDTH * scale
        const scaledWorldHeight = CanvasSettings.CANVAS_WORLD_HEIGHT * scale

        if (scaledWorldWidth <= rect.width) {
            viewRef.current.panX = (rect.width - scaledWorldWidth) / 2
        } else {
            const minPanX = rect.width - scaledWorldWidth
            const maxPanX = 0
            viewRef.current.panX = Math.min(maxPanX, Math.max(minPanX, viewRef.current.panX))
        }

        if (scaledWorldHeight <= rect.height) {
            viewRef.current.panY = (rect.height - scaledWorldHeight) / 2
        } else {
            const minPanY = rect.height - scaledWorldHeight
            const maxPanY = 0
            viewRef.current.panY = Math.min(maxPanY, Math.max(minPanY, viewRef.current.panY))
        }
    }

    function resetView(rect: DOMRect) {
        viewRef.current.panY = viewRef.current.panY / viewRef.current.zoom
        viewRef.current.panX = 0
        viewRef.current.zoom = 1
        clampViewToBounds(rect)
    }

    function handleWheel(event: WheelEvent) {
        event.preventDefault()

        const canvas = canvasRef.current
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()
        const mouseX = event.clientX - rect.left
        const mouseY = event.clientY - rect.top
        const fitScale = rect.width / CanvasSettings.CANVAS_WORLD_WIDTH

        const zoomFactor = event.deltaY < 0 ? 1.1 : 0.9
        const prevZoom = viewRef.current.zoom
        const nextZoom = Math.min(CanvasSettings.MAX_ZOOM, Math.max(deps.minZoomRef.current, prevZoom * zoomFactor))

        if (nextZoom === prevZoom) return

        const prevScale = fitScale * prevZoom
        const nextScale = fitScale * nextZoom

        // Keep the world point under the cursor fixed while zooming.
        const worldX = (mouseX - viewRef.current.panX) / prevScale
        const worldY = (mouseY - viewRef.current.panY) / prevScale

        viewRef.current.zoom = nextZoom
        viewRef.current.panX = mouseX - worldX * nextScale
        viewRef.current.panY = mouseY - worldY * nextScale
        clampViewToBounds(rect)

        scheduleDraw()
    }

    function handleMouseDown(event: React.MouseEvent<HTMLCanvasElement>) {
        if (event.button === 1) {
            event.preventDefault()

            const canvas = canvasRef.current
            if (!canvas) return

            const rect = canvas.getBoundingClientRect()
            resetView(rect)
            scheduleDraw()
            return
        }

        if (event.button !== 0) return

        dragRef.current.isDragging = true
        dragRef.current.lastX = event.clientX
        dragRef.current.lastY = event.clientY
        if(!deps.setHoveredTarget) return;
        deps.setHoveredTarget(null)
    }

    function handleMouseMove(event: React.MouseEvent<HTMLCanvasElement>) {
        const canvas = canvasRef.current
        if (canvas) {
            const rect = canvas.getBoundingClientRect()
            const mouseX = event.clientX - rect.left
            const mouseY = event.clientY - rect.top
            const fitScale = rect.width / CanvasSettings.CANVAS_WORLD_WIDTH
            const scale = fitScale * viewRef.current.zoom
            const worldX = (mouseX - viewRef.current.panX) / scale
            const worldY = (mouseY - viewRef.current.panY) / scale
            if(deps.setMouseWorldPos){
                deps.setMouseWorldPos({ x: Math.round(worldX), y: Math.round(worldY) })
            }

            if(deps.hoveredTargetRef && deps.trainHoverEntries && deps.setHoveredTarget)
            if (!dragRef.current.isDragging) {
                const ctx = canvas.getContext('2d')
                if (ctx && deps.signalDataRef) {
                    let hit: typeof deps.hoveredTargetRef.current = null

                    for (const { train, signal } of deps.trainHoverEntries) {
                        const tx = Number(signal.trainPos.x)
                        const ty = Number(signal.trainPos.y)
                        const path = TRAIN_BASE_PATH[signal.signalDirectionOnMap]
                        if (ctx.isPointInPath(path, worldX - tx, worldY - ty)) {
                            hit = {
                                type: 'train',
                                train,
                                signal,
                                screenX: (tx + (signal.signalDirectionOnMap === 'right' ? -25 : 25)) * scale + viewRef.current.panX,
                                screenY: (ty) * scale + viewRef.current.panY
                            }
                            break
                        }
                    }

                    if (!hit) {
                        for (const signal of deps.signalDataRef.current) {
                            const sx = Number(signal.signalPos.x)
                            const sy = Number(signal.signalPos.y)
                            const signalPath = SIGNAL_BASE_PATH[signal.signalDirectionOnMap]
                            if (ctx.isPointInPath(signalPath, worldX - sx, worldY - sy)) {
                                hit = {
                                    type: 'signal',
                                    signal,
                                    screenX: sx * scale + viewRef.current.panX,
                                    screenY: sy * scale + viewRef.current.panY,
                                }
                                break
                            }
                        }
                    }

                    canvas.style.cursor = hit ? 'pointer' : 'default'
                    deps.setHoveredTarget(hit)
                }
            }
        }

        if (!dragRef.current.isDragging) return

        const deltaX = event.clientX - dragRef.current.lastX
        const deltaY = event.clientY - dragRef.current.lastY

        dragRef.current.lastX = event.clientX
        dragRef.current.lastY = event.clientY

        viewRef.current.panX += deltaX
        viewRef.current.panY += deltaY

        if (canvas) {
            const rect = canvas.getBoundingClientRect()
            clampViewToBounds(rect)
        }
        scheduleDraw()
    }

    function handleMouseUpOrLeave(event: React.MouseEvent<HTMLCanvasElement>) {
        dragRef.current.isDragging = false
    }

    function handleMouseLeave(event: React.MouseEvent<HTMLCanvasElement>) {
        dragRef.current.isDragging = false
        if(!deps.setMouseWorldPos || !deps.setHoveredTarget) return;
        deps.setMouseWorldPos(null)
        deps.setHoveredTarget(null)

        const canvas = canvasRef.current
        if (canvas) {
            canvas.style.cursor = 'default'
        }
    }

    return {
        clampViewToBounds,
        resetView,
        handleWheel,
        handleMouseDown,
        handleMouseLeave,
        handleMouseMove,
        handleMouseUpOrLeave,
    }
}