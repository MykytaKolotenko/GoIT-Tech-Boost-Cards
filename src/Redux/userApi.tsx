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
    filter: string;
}

const URL = 'https://6437c39e894c9029e8c54c4c.mockapi.io/Users';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    keepUnusedDataFor: 0,
    refetchOnMountOrArgChange: true,
    endpoints: build => ({
       
        getUsers: build.query<
            Array<IUser>,
            string
        >({
            query: (arg) => {
                const { page, limit, filter }: IFetchParams = JSON.parse(arg)
                
                switch (filter) {
                    case "all":
                        return `?p=${page}&&limit=${limit}`
                    
                    case "follow":
                        return `?p=${page}&&limit=${limit}&&subscribed=false`
                    
                    case "following":
                        return `?p=${page}&&limit=${limit}&&subscribed=true`
                        
                    
                    default :
                        return `/dsadasd`
                }
                
            }, 
  
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
