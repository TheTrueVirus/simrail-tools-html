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
    DATA: {
        trainList: SimRailDataTypes.FilteredTrainList[]
        lastSignalMapRef: React.RefObject<Map<string, string>>
        stationList: SimRailDataTypes.StationData[]
        steamUserList: Map<string, SimRailDataTypes.SteamUser>
    }
    CONSTANTS: {
        CURRENT_VERSION: string | undefined
        FORUM_LINK: string
        GITHUB_REPO_LINK: string
        GITHUB_PAGE_LINK: string
    }
    OPTIONS: {
        userOptions: typeof USER_OPTIONS
        devRenderOptions: RenderOptionsProps
    }
    canvasSettings: CanvasSettingsProps
    trainHoverEntries?: { train: SimRailDataTypes.FilteredTrainList, signal: SRTO_DataTypes.SIGNAL }[]
}

interface viewRefProp {
    zoom: number,
    panX: number,
    panY: number
}

interface CanvasEventHandlerProps {
    REFS: {
        canvasRef: React.RefObject<HTMLCanvasElement | null>
        viewRef: React.RefObject<viewRefProp>
        dragRef: React.RefObject<{ isDragging: boolean; lastX: number; lastY: number }>
        signalDataRef?: React.RefObject<SRTO_DataTypes.SIGNAL[] | null>
        minZoomRef: React.RefObject<number>
        mouseWorldPosRef?: React.RefObject<{ x: number, y: number } | null>
        hoveredTargetRef?: React.RefObject<HoveredTargetType>
    }
    FUNCS: {
        scheduleDraw: () => void
        setMouseWorldPos?: React.Dispatch<SetStateAction<{ x: number, y: number } | null>>
        setHoveredTarget?: React.Dispatch<SetStateAction<HoveredTargetType>>,
    }
    SRTO_PROPS: HandlerProps
}

export function createCanvasEventHandler({ REFS, FUNCS, SRTO_PROPS: { DATA, OPTIONS, CONSTANTS, canvasSettings, trainHoverEntries } }: CanvasEventHandlerProps) {

    function clampViewToBounds(rect: DOMRect) {

        if (OPTIONS.userOptions.allowExtendedView) return
        const fitScale = rect.width / canvasSettings.CANVAS_WORLD_WIDTH
        const scale = fitScale * REFS.viewRef.current.zoom

        const scaledWorldWidth = canvasSettings.CANVAS_WORLD_WIDTH * scale
        const scaledWorldHeight = canvasSettings.CANVAS_WORLD_HEIGHT * scale

        if (scaledWorldWidth <= rect.width) {
            REFS.viewRef.current.panX = (rect.width - scaledWorldWidth) / 2
        } else {
            const minPanX = rect.width - scaledWorldWidth
            const maxPanX = 0
            REFS.viewRef.current.panX = Math.min(maxPanX, Math.max(minPanX, REFS.viewRef.current.panX))
        }

        if (scaledWorldHeight <= rect.height) {
            REFS.viewRef.current.panY = (rect.height - scaledWorldHeight) / 2
        } else {
            const minPanY = rect.height - scaledWorldHeight
            const maxPanY = 0
            REFS.viewRef.current.panY = Math.min(maxPanY, Math.max(minPanY, REFS.viewRef.current.panY))
        }
    }

    function resetView(rect: DOMRect) {
        REFS.viewRef.current.panY = REFS.viewRef.current.panY / REFS.viewRef.current.zoom
        REFS.viewRef.current.panX = 0
        REFS.viewRef.current.zoom = 1
        clampViewToBounds(rect)
    }

    function handleWheel(event: WheelEvent) {
        event.preventDefault()

        const canvas = REFS.canvasRef.current
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()
        const mouseX = event.clientX - rect.left
        const mouseY = event.clientY - rect.top
        const fitScale = rect.width / canvasSettings.CANVAS_WORLD_WIDTH

        const zoomFactor = event.deltaY < 0 ? 1.1 : 0.9
        const prevZoom = REFS.viewRef.current.zoom
        const nextZoom = Math.min(canvasSettings.MAX_ZOOM, Math.max(REFS.minZoomRef.current, prevZoom * zoomFactor))

        if (nextZoom === prevZoom) return

        const prevScale = fitScale * prevZoom
        const nextScale = fitScale * nextZoom

        // Keep the world point under the cursor fixed while zooming.
        const worldX = (mouseX - REFS.viewRef.current.panX) / prevScale
        const worldY = (mouseY - REFS.viewRef.current.panY) / prevScale

        REFS.viewRef.current.zoom = nextZoom
        REFS.viewRef.current.panX = mouseX - worldX * nextScale
        REFS.viewRef.current.panY = mouseY - worldY * nextScale
        clampViewToBounds(rect)

        FUNCS.scheduleDraw()
    }

    function handleMouseDown(event: React.MouseEvent<HTMLCanvasElement>) {
        if (event.button === 1) {
            event.preventDefault()

            const canvas = REFS.canvasRef.current
            if (!canvas) return

            const rect = canvas.getBoundingClientRect()
            resetView(rect)
            FUNCS.scheduleDraw()
            return
        }

        if (event.button !== 0) return

        REFS.dragRef.current.isDragging = true
        REFS.dragRef.current.lastX = event.clientX
        REFS.dragRef.current.lastY = event.clientY
        if (!FUNCS.setHoveredTarget) return;
        FUNCS.setHoveredTarget(null)
    }

    function handleMouseMove(event: React.MouseEvent<HTMLCanvasElement>) {
        const canvas = REFS.canvasRef.current
        if (canvas) {
            const rect = canvas.getBoundingClientRect()
            const mouseX = event.clientX - rect.left
            const mouseY = event.clientY - rect.top
            const fitScale = rect.width / canvasSettings.CANVAS_WORLD_WIDTH
            const scale = fitScale * REFS.viewRef.current.zoom
            const worldX = (mouseX - REFS.viewRef.current.panX) / scale
            const worldY = (mouseY - REFS.viewRef.current.panY) / scale
            if (FUNCS.setMouseWorldPos) {
                FUNCS.setMouseWorldPos({ x: Math.round(worldX), y: Math.round(worldY) })
            }

            if (REFS.hoveredTargetRef && trainHoverEntries && FUNCS.setHoveredTarget)
                if (!REFS.dragRef.current.isDragging) {
                    const ctx = canvas.getContext('2d')
                    if (ctx && REFS.signalDataRef) {
                        let hit: typeof REFS.hoveredTargetRef.current = null

                        function flipCoords({ x, y }: { x: string | number, y: string | number }) {
                            if (OPTIONS.userOptions.flipScreen) {
                                return {
                                    x: canvasSettings.CANVAS_WORLD_WIDTH - Number(x),
                                    y: canvasSettings.CANVAS_WORLD_HEIGHT - Number(y)
                                }
                            } else {
                                return {
                                    x: Number(x),
                                    y: Number(y)
                                }
                            }
                        }

                        for (const { train, signal } of trainHoverEntries) {

                            const trainCoordsAndDirection = () => {
                                const positions = signal.trainPosDistance
                                // return fallback position if no distance positioning given
                                if (!positions) return { x: signal.trainPos.x, y: signal.trainPos.y, dir: false }

                                for (const pos of positions) {
                                    if (train.TrainData.DistanceToSignalInFront > pos.distanceToSignal) {
                                        return { x: pos.x, y: pos.y, dir: pos.switchDirection }
                                    }
                                    continue;
                                }
                                return { x: signal.trainPos.x, y: signal.trainPos.y, dir: false }
                            }

                            const { x, y } = flipCoords(trainCoordsAndDirection());
                            const dir = trainCoordsAndDirection().dir
                            const signalDirectionOnFlip = OPTIONS.userOptions.flipScreen ? signal.signalDirectionOnMap === 'right' ? 'left' : 'right' : signal.signalDirectionOnMap
                            const signalDirectionOnDistance = dir ? signalDirectionOnFlip === 'left' ? 'right' : 'left' : signalDirectionOnFlip
                            const path = TRAIN_BASE_PATH[signalDirectionOnDistance]
                            if (ctx.isPointInPath(path, worldX - x, worldY - y)) {
                                hit = {
                                    type: 'train',
                                    train,
                                    signal,
                                    screenX: (x + (signalDirectionOnDistance === 'right' ? -25 : 25)) * scale + REFS.viewRef.current.panX,
                                    screenY: (y) * scale + REFS.viewRef.current.panY
                                }
                                break
                            }
                        }

                        if (!hit) {
                            if(REFS.signalDataRef.current === null) return;
                            for (const signal of REFS.signalDataRef.current) {
                                if (signal.invisibleSignal) continue;
                                const { x, y } = flipCoords(signal.signalPos);
                                const signalDirection = OPTIONS.userOptions.flipScreen ? signal.signalDirectionOnMap === 'right' ? 'left' : 'right' : signal.signalDirectionOnMap
                                const signalPath = SIGNAL_BASE_PATH[signalDirection]
                                if (ctx.isPointInPath(signalPath, worldX - x, worldY - y)) {
                                    hit = {
                                        type: 'signal',
                                        signal,
                                        screenX: x * scale + REFS.viewRef.current.panX,
                                        screenY: y * scale + REFS.viewRef.current.panY,
                                    }
                                }
                            }
                        }

                        canvas.style.cursor = hit ? 'pointer' : 'default'
                        FUNCS.setHoveredTarget(hit)
                    }
                }
        }

        if (!REFS.dragRef.current.isDragging) return

        const deltaX = event.clientX - REFS.dragRef.current.lastX
        const deltaY = event.clientY - REFS.dragRef.current.lastY

        REFS.dragRef.current.lastX = event.clientX
        REFS.dragRef.current.lastY = event.clientY

        REFS.viewRef.current.panX += deltaX
        REFS.viewRef.current.panY += deltaY

        if (canvas) {
            const rect = canvas.getBoundingClientRect()
            clampViewToBounds(rect)
        }
        FUNCS.scheduleDraw()
    }

    function handleMouseUpOrLeave(event: React.MouseEvent<HTMLCanvasElement>) {
        REFS.dragRef.current.isDragging = false
    }

    function handleMouseLeave(event: React.MouseEvent<HTMLCanvasElement>) {
        REFS.dragRef.current.isDragging = false
        if (!FUNCS.setMouseWorldPos || !FUNCS.setHoveredTarget) return;
        FUNCS.setMouseWorldPos(null)
        FUNCS.setHoveredTarget(null)

        const canvas = REFS.canvasRef.current
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