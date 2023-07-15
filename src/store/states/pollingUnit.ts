import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PollingUnit {
  id: string
}

export interface TaskState {
  loading?: boolean
  data: PollingUnit[] | null
}
const initialState: TaskState = {
  loading: false,
  data: null
}

export const accountSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    updateTasks: (state: TaskState, action: PayloadAction<TaskState>) => {
      state.data = action.payload.data || null
      state.loading = action.payload.loading || false
    },
  }
})

export const { updateTasks, } = accountSlice.actions

export default accountSlice.reducer