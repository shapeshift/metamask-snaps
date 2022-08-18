import { useDispatch } from 'react-redux'

import type { ProviderDispatch } from '../../state/store'

export const useProviderDispatch: () => ProviderDispatch = useDispatch
