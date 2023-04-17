import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IPageParametes {
	limit: number;
	page: number;
	loader: boolean;
}

const initialState: IPageParametes = { page: 1, limit: 10, loader: false }

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
		}
	}
})

export const {
	incrementPage,
	decrementPage,
	setPage,
	setLimit,
	offMainLoader,
	onMainLoader
} = pageParametes.actions
export default pageParametes.reducer
