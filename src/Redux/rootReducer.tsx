import { combineReducers } from '@reduxjs/toolkit'
import { userApi } from './userApi'
import pageParametersSlice from './pageParametersSlice'

const rootReducer = combineReducers({
	userApi: userApi.reducer,
	pageParameters: pageParametersSlice
})

export default rootReducer
