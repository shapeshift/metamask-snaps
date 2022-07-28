import { TypedUseSelectorHook, useSelector } from 'react-redux'

import type { RootState } from '../../state/store'

export const useProviderSelector: TypedUseSelectorHook<RootState> = useSelector
