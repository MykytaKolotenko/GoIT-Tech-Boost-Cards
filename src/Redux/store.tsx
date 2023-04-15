import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import rootReducer from './rootReducer'
import middleware from './rootMiddleware'

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
	reducer: rootReducer,
	middleware
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch

export default store
