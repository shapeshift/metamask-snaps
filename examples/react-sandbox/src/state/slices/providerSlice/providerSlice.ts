import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProviderState {
  provider: any
}
const initialState: ProviderState = {
  provider: {},
}

export const providerSlice = createSlice({
  name: 'provider',
  initialState,

  reducers: {
    setProvider: (state, action: PayloadAction<any>) => {
      state.provider = action.payload
    },
  },
})

export const { setProvider } = providerSlice.actions

export const providerReducer = providerSlice.reducer
