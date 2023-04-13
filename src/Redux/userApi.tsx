import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IUser from '../interface/IUser';

const URL = 'https://6437c39e894c9029e8c54c4c.mockapi.io/Users';
// Define a service using a base URL and expected endpoints
export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: URL }),
	endpoints: (builder) => ({
		getUsers: builder.query<Array<IUser>, string>({
			query: () => ``
		})
	})
});

export const { useGetUsersQuery } = userApi;
