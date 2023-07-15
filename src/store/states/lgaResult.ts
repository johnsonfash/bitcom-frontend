import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RequestHook } from '../../types/common'

export interface LgaResult {
  uniqueid: number,
  lga_name: string,
  party_abbreviation: string,
  total: number,
  date_entered: string
}

export interface LgaResultState extends RequestHook {
  data?: LgaResult[] | null
}

const initialState: LgaResultState = {
  loading: false,
  data: null,
  error: false,
  message: null,
}

export const LgaResultSlice = createSlice({
  name: 'lga-result',
  initialState,
  reducers: {
    updateLgaResult: (state: LgaResultState, action: PayloadAction<LgaResultState>) => {
      state.data = action.payload.data ?? null
      state.loading = action.payload.loading ?? false
      state.error = action.payload.error ?? false
      state.message = action.payload.message ?? null
    },
  }
})

export const { updateLgaResult, } = LgaResultSlice.actions

export default LgaResultSlice.reducer