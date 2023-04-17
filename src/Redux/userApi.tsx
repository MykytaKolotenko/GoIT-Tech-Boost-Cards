import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IUser from '../interface/IUser';



export interface IUserPutQuery {
    id: string;
    followers: number;
    subscribed: boolean;
}

export interface IFetchParams {
    page: number;
    limit: number;
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
            query: (arg) => {
                const {page, limit}:IFetchParams = JSON.parse(arg)

                return `?p=${page}&&limit=${limit}`
            },
            serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },

              
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems)
      },
    
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            }
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
    }),
});

export const { useGetUsersQuery, useChangeFollowersMutation } = userApi;
