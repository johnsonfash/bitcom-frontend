import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RequestHook } from '../../types/common'

export interface PollingUnitResult {
  uniqueid: number,
  polling_unit_id: number,
  ward_id: number,
  lga_id: number,
  uniquewardid: number,
  polling_unit_number: string,
  polling_unit_name: string,
  polling_unit_description: string,
  lat: number,
  long: number,
  entered_by_user: string,
  date_entered: string,
  user_ip_address: string,
  result_id: number,
  polling_unit_uniqueid: string,
  party_abbreviation: string,
  party_score: number
}

export interface PollingUnitResultState extends RequestHook {
  data?: PollingUnitResult[] | null
  id?: number
}
const initialState: PollingUnitResultState = {
  loading: false,
  data: null,
  error: false,
  message: null,
  id: 0
}

export const pollingUnitResultSlice = createSlice({
  name: 'polling-unit-result',
  initialState,
  reducers: {
    updatePollingUnitResult: (state: PollingUnitResultState, action: PayloadAction<PollingUnitResultState>) => {
      state.data = action.payload.data ?? null
      state.loading = action.payload.loading ?? false
      state.error = action.payload.error ?? false
      state.message = action.payload.message ?? null
      if (action.payload.data?.length) {
        state.id = action.payload.data[0].uniqueid
      }
    },
  }
})

export const { updatePollingUnitResult, } = pollingUnitResultSlice.actions

export default pollingUnitResultSlice.reducer