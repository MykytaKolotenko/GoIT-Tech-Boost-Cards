import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IUser from '../interface/IUser';

export interface IUserPutQuery {
    id: string;
    followers: number;
    subscribed: boolean;
}

const URL = 'https://6437c39e894c9029e8c54c4c.mockapi.io/Users';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: build => ({
       
        getUsers: build.query<
            Array<IUser>,
            string
        >({
            query: () => ''
        }),
        
        changeFollowers: build.mutation<
            IUserPutQuery,
            Partial<IUserPutQuery> & Pick<IUserPutQuery, 'id'>
        >({
            query: ({ id, ...put }) => ({
                url: `/${id}`,
                method: 'PUT',
                body: put
            })
        })
    })
});

export const { useGetUsersQuery, useChangeFollowersMutation } = userApi;
