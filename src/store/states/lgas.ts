import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RequestHook } from '../../types/common'

export interface Lga {
  uniqueid: number,
  lga_id: number,
  lga_name: string,
  state_id: number,
  lga_description: string,
  entered_by_user: string,
  date_entered: string | null,
  user_ip_address: string
}

export interface LgasState extends RequestHook{
  data?: Lga[] | null
}
const initialState: LgasState = {
  loading: false,
  data: null,
  error: false,
  message: null,
}

export const LgasSlice = createSlice({
  name: 'lgas',
  initialState,
  reducers: {
    updateLgas: (state: LgasState, action: PayloadAction<LgasState>) => {
      state.data = action.payload.data ?? null
      state.loading = action.payload.loading ?? false
      state.error = action.payload.error ?? false
      state.message = action.payload.message ?? null
    },
  }
})

export const { updateLgas, } = LgasSlice.actions

export default LgasSlice.reducer