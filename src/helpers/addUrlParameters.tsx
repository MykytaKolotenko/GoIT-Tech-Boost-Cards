import { IFetchParams } from '../Redux/userApi'

const addUrlParameters = (page: number, limit: number): string => {
	const data: IFetchParams = { page, limit }
	return JSON.stringify(data)
}

export default addUrlParameters
