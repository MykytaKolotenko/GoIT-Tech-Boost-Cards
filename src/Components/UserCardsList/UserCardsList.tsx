import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from './index.styled';
import { useGetUsersQuery } from '../../Redux/userApi';
import addUrlParameters from '../../helpers/addUrlParameters';
import UserCard from '../UserCard/UserCard';
import { IRootState } from '../../Redux/store';
import { IPageParametes, incrementPage, offMainLoader, onMainLoader } from '../../Redux/pageParametersSlice';

const UserCardsList = () => {
  const { page, limit, loader } = useSelector<IRootState, IPageParametes>(({ pageParameters }) => pageParameters);
  const dispatch = useDispatch();

  const { data, isFetching} = useGetUsersQuery(addUrlParameters(page, limit));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleLoadMore = useCallback(() => dispatch(incrementPage()), []);

  useEffect(() => {
    if (loader) {
      dispatch(onMainLoader());
    } else if ( data!==undefined &&  data.length > 0) {
      dispatch(offMainLoader());
    }
  }, [data, dispatch, loader]);

  

  console.log(data);
  

  return (
    <>
      {loader && <div>Loading</div>}
	  
      {!loader && data!==undefined && (
        <div className='container'>
        
          <List>
            {data?.map(({ id, user, avatar, tweets, followers, subscribed }) => (
              <li key={id}>
                <UserCard id={id} user={user} avatar={avatar} tweets={tweets} followers={followers} subscribed={subscribed} />
              </li>
            ))}
          </List>
          
          {isFetching ?<div>Loading</div> : <button onClick={handleLoadMore}>load more</button>}
        </div>
      )}
    </>
  );
};

export default UserCardsList;
