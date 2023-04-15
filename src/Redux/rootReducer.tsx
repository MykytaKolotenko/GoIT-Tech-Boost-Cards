import { combineReducers } from '@reduxjs/toolkit'
import { userApi } from './userApi'

const rootReducer = combineReducers({
	userApi: userApi.reducer
})

export default rootReducer
