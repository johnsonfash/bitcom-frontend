import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import pollingUnitResult from './states/pollingUnitResult'
import pollingUnits from './states/pollingUnits'
import lgaResult from './states/lgaResult'
import lgas from './states/lgas'
import agents from './states/agents'

export const store = configureStore({
  reducer: {
    pollingUnitResult,
    pollingUnits,
    lgaResult,
    lgas,
    agents,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch