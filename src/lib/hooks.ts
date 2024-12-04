import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from './store'

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = (selector: (state: RootState) => unknown) => useSelector(selector)
export const useAppStore = () => useStore<AppStore>()