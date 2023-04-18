import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import IUser from '../interface/IUser'

export interface IPageParametes {
	limit: number;
	page: number;
	loader: boolean;
	usersFilter: string;
	userData: Array<IUser>;
}

const initialState: IPageParametes = {
	page: 1,
	limit: 10,
	loader: false,
	usersFilter: 'all',
	userData: []
}

const pageParametes = createSlice({
	name: 'PageParameters',
	initialState,
	reducers: {
		incrementPage: state => {
			state.page++
		},
		decrementPage: state => {
			state.page--
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		setLimit: (state, action: PayloadAction<number>) => {
			state.limit = action.payload
		},
		offMainLoader: state => {
			state.loader = false
		},
		onMainLoader: state => {
			state.loader = true
		},
		changeUsersFilter: (state, action: PayloadAction<string>) => {
			state.usersFilter = action.payload
		},
		addUserData: (state, action: PayloadAction<Array<IUser>>) => {
			state.userData = [...state.userData, ...action.payload]
		},
		deleteUserData: state => {
			state.userData = []
		}
	}
})

export const {
	incrementPage,
	decrementPage,
	setPage,
	setLimit,
	offMainLoader,
	onMainLoader,
	changeUsersFilter,
	addUserData,
	deleteUserData
} = pageParametes.actions
export default pageParametes.reducer
