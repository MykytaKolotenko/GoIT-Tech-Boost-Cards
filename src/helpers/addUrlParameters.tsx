import { IFetchParams } from '../Redux/userApi'

const addUrlParameters = (
	page: number,
	limit: number,
	filter: string
): string => {
	const data: IFetchParams = { page, limit, filter }
	return JSON.stringify(data)
}

export default addUrlParameters
