import { configureStore } from '@reduxjs/toolkit'

import { providerReducer } from './slices/providerSlice/providerSlice'

export const store = configureStore({
  reducer: {
    provider: providerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type ProviderDispatch = typeof store.dispatch
