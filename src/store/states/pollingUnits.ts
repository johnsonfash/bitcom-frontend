import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RequestHook } from '../../types/common'

export interface PollingUnit {
  uniqueid: number
  polling_unit_name: string
  polling_unit_number: string
  lat: string
  long: string
}

export interface PollingUnitsState extends RequestHook {
  data?: PollingUnit[] | null
}
const initialState: PollingUnitsState = {
  loading: false,
  data: null,
  error: false,
  message: null,
}

export const pollingUnitsSlice = createSlice({
  name: 'polling-units',
  initialState,
  reducers: {
    updatePollingUnits: (state: PollingUnitsState, action: PayloadAction<PollingUnitsState>) => {
      state.data = action.payload.data ?? null
      state.loading = action.payload.loading ?? false
      state.error = action.payload.error ?? false
      state.message = action.payload.message ?? null
    },
  }
})

export const { updatePollingUnits, } = pollingUnitsSlice.actions

export default pollingUnitsSlice.reducer