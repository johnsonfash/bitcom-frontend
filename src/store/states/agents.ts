import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RequestHook } from '../../types/common'

export interface Agent {
  name_id: number
  firstname: string
  lastname: string
}

export interface AgentsState extends RequestHook {
  data?: Agent[] | null
}
const initialState: AgentsState = {
  loading: false,
  data: null,
  error: false,
  message: null,
}

export const agentsSlice = createSlice({
  name: 'agents',
  initialState,
  reducers: {
    updateAgents: (state: AgentsState, action: PayloadAction<AgentsState>) => {
      state.data = action.payload.data ?? null
      state.loading = action.payload.loading ?? false
      state.error = action.payload.error ?? false
      state.message = action.payload.message ?? null
    },
  }
})

export const { updateAgents, } = agentsSlice.actions

export default agentsSlice.reducer