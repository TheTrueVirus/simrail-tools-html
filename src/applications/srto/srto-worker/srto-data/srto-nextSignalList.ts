
/*
* Normally, every train has to have a SignalInFront, so it can't be null
* But SimRail API only provides us with SignalInFront if the Signal is less than 5 km away
* If the signal is more than 5 km away, the SignalInFront entry is `null`
* So we have to guess which is the next signal. It can be wrong, but better than nothing
*/

export interface NextSignalGroup {
	lastSignals: string[]
	nextSignal: string
}

export const SRTO_NextSignalGroups: NextSignalGroup[] = [
	//!
	//! #region S1 - [KATOWICE - WARSZAWA]
	//!
	//
	// Katowice -> Katowice Towarowa KTC [Map-Border]
	{ lastSignals: ['l137_ktc_u1', 'l127_ktc_u2'], nextSignal: 'l137_ktc_o' },

	//
	// Katowice -> Brynow [Map-Border]
	{ lastSignals: [ 'l139_bry_a', 'l139_bry_b', 'l139_bry_c'], nextSignal: 'l139_bry_o' },

	//
	// Lazy Lc -> Przemiarki
	{ lastSignals: ['LC_S7', 'LC_S3', 'LC_S1', 'LC_S2', 'LC_S4', 'LC_S6'], nextSignal: 'Pmi_B' },

	//
	// Przemiarki -> Dabrowa Gornicza Towarowa
	{ lastSignals: ['Pmi_B', 'Pmi_A'], nextSignal: 'DTA_B' },

	//
	// Przemiarki -> Lazy Lc
	{ lastSignals: ['Pmi_D', 'Pmi_C'], nextSignal: 'LC_Z' },

	//
	// Myszkow Map-Exit
	{ lastSignals: ['My_D', 'My_C'], nextSignal: 'My_Z' },
	
	//
	// Koniecpol <-> Starzyny
	{ lastSignals: ['1830_Ko_J'], nextSignal: 'Str_D' },
	{ lastSignals: ['Str_B', 'Str_A'], nextSignal: '1830_Ko_A' },
	//
	//Starzyny - Sprowa - Kozlow
	{ lastSignals: ['Str_C', 'Str_D'], nextSignal: 'Sp_D' },
	{ lastSignals: ['Sp_B', 'Sp_A'], nextSignal: 'Str_B' },
	
	{ lastSignals: ['Sp_C', 'Sp_D'], nextSignal: 'Kz_C' },
	{ lastSignals: ['Kz_F7', 'Kz_F5', 'Kz_F3', 'Kz_F1', 'Kz_G2', 'Kz_G4', 'Kz_G6'], nextSignal: 'Sp_B' },



	//!
	//! #region S2 - [LODZ VOIVODESHIP - WARSZAWA]
	//!
	//
	// LK14 Sedzice <-> Retkinia
	{ lastSignals: ['3792_Se_B', '3792_Se_C'], nextSignal: '3827_Si_K' },
	{ lastSignals: ['3827_Si_L', '3827_Si_B', '3827_Si_C', '3827_Si_D', '3827_Si_E'], nextSignal: '2582_Me_D' },
	{ lastSignals: ['2582_Me_C'], nextSignal: '5291_ZW_P' },
	{ lastSignals: ['2582_Me_D'], nextSignal: '5291_ZW_R' },
	{ lastSignals: ['919_Ga_C', '919_Ga_D', '919_Ga_E', '919_Ga_F'], nextSignal: '292_Bo_D' },
	{ lastSignals: ['292_Bo_C'], nextSignal: '2360_La_P' },
	{ lastSignals: ['292_Bo_D'], nextSignal: '2360_La_R' },
	{ lastSignals: ['2360_La_C', '2360_La_D', '2360_La_E', '2360_La_F', '2360_La_G'], nextSignal: '802_Db_J' },
	{ lastSignals: ['802_Db_H'], nextSignal: '802_Db_C' },
	{ lastSignals: ['802_Db_J'], nextSignal: '802_Db_D' },
	{ lastSignals: ['802_Db_C'], nextSignal: '3093_Pa_P' },
	{ lastSignals: ['802_Db_D'], nextSignal: '3093_Pa_R' },
	{ lastSignals: ['3093_Pa_C', '3093_Pa_D', '3093_Pa_E', '3093_Pa_F'], nextSignal: '2330_Lb_R' },
	{ lastSignals: ['2330_Lb_C', '2330_Lb_D', '2330_Lb_E', '2330_Lb_F', '2330_Lb_G'], nextSignal: '3577_Rt_F' },
	//
	{ lastSignals: ['3577_Rt_D', '3577_Rt_C', '3577_Rt_B', '3577_Rt_A'], nextSignal: '2330_Lb_B' },
	{ lastSignals: ['2330_Lb_O', '2330_Lb_N', '2330_Lb_M', '2330_Lb_L', '2330_Lb_K'], nextSignal: '3093_Pa_B' },
	{ lastSignals: ['3093_Pa_N', '3093_Pa_M', '3093_Pa_L', '3093_Pa_K'], nextSignal: '802_Db_B' },
	{ lastSignals: ['802_Db_B'], nextSignal: '802_Db_F' },
	{ lastSignals: ['802_Db_A'], nextSignal: '802_Db_E' },
	{ lastSignals: ['802_Db_F'], nextSignal: '2360_La_B' },
	{ lastSignals: ['802_Db_E'], nextSignal: '2360_La_A' },
	{ lastSignals: ['2360_La_N', '2360_La_M', '2360_La_L', '2360_La_K', '2360_La_J'], nextSignal: '292_Bo_B' },
	{ lastSignals: ['292_Bo_B'], nextSignal: '919_Ga_B' },
	{ lastSignals: ['292_Bo_A'], nextSignal: '919_Ga_A' },
	{ lastSignals: ['5291_ZW_L7', '5291_ZW_L5', '5291_ZW_L3', '5291_ZW_L1', '5291_ZW_K2', '5291_ZW_K4'], nextSignal: '2582_Me_B' },
	{ lastSignals: ['2582_Me_B'], nextSignal: '3827_Si_A' },
	{ lastSignals: ['2582_Me_A'], nextSignal: '3827_Si_A2' },
	{ lastSignals: ['3827_Si_N', '3827_Si_J', '3827_Si_G', '3827_Si_F'], nextSignal: '3792_Se_A' },

	//
	// Lodz Olechow <-> Galkoweg
	{ lastSignals: ['2439_LOC_W31', '2439_LOC_W32'], nextSignal: '924_G_D' },
	{ lastSignals: ['924_G_J', '924_G_H', '924_G_G', '924_G_F', '924_G_E'], nextSignal: '2439_LOC_Z2' },

	//
	// Lodz Widzew <-> Lodz Marysin <-> Zgierz
	{ lastSignals: ['2457_LW_N104', '2457_LW_N102', '2457_LW_M8', '2457_LW_M6', '2457_LW_M4', '2457_LW_M2'], nextSignal: '2437_LM_A' },
	{ lastSignals: ['2437_LM_D', '2437_LM_C'], nextSignal: '2457_LW_A' },
	{ lastSignals: ['2437_LM_E', '2437_LM_F'], nextSignal: '5311_Zg_R' },
	{ lastSignals: ['5311_Zg_K', '5311_Zg_L', '5311_Zg_M', '5311_Zg_N', '5311_Zg_O', '5311_Zg_P'], nextSignal: '2437_LM_H' },

	//
	// Zgierz <-> Glinnik
	{ lastSignals: ['5311_Zg_H', '5311_Zg_G', '5311_Zg_F', '5311_Zg_E', '5311_Zg_D', '5311_Zg_C'], nextSignal: '1057_Gl_F' },
	{ lastSignals: ['1057_Gl_E', '1057_Gl_D'], nextSignal: '5311_Zg_B' },

	// -- TEMPLATE ---- DONT USE --
	{ lastSignals: [''], nextSignal: '' },
]

export const SRTO_NextSignals: Record<string, string> = Object.fromEntries(
	SRTO_NextSignalGroups.flatMap(({ lastSignals, nextSignal }) => {
		return lastSignals.map((lastSignal) => [lastSignal, nextSignal])
	})
)

export function getNextSignalFromLastSignal(lastSignal: string | null | undefined): string | null {
	if (!lastSignal) return null

	return SRTO_NextSignals[lastSignal] ?? null
}