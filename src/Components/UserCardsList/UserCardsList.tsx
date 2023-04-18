import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, LoadMore, MyP } from './index.styled';
import { useGetUsersQuery } from '../../Redux/userApi';
import addUrlParameters from '../../helpers/addUrlParameters';
import { IRootState } from '../../Redux/store';
import { IPageParametes, addUserData, deleteUserData, incrementPage, setPage } from '../../Redux/pageParametersSlice';
import UsersDropDown from '../UsersDropDown/UsersDropDown';
import UserCard from '../UserCard/UserCard';
import Spinner from '../Spinner/Spinner';

interface Props {}

const UserCardsList = (props: Props) => {
  const { page, limit, usersFilter, userData } = useSelector<IRootState, IPageParametes>(({ pageParameters }) => pageParameters);
  const dispatch = useDispatch();

  const { data, isFetching } = useFetchData(page, limit, usersFilter);

  const handleLoadMore = useCallback(() => dispatch(incrementPage()), [dispatch]);

  useEffect(() => {
    dispatch(deleteUserData());
  }, [dispatch, usersFilter]);

  useEffect(() => {
    return () => {dispatch(setPage(1))}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    if (data) {
      dispatch(addUserData(data));
    }
  }, [data, dispatch]);


  return (
    <>

      {data !== undefined && (
        <div className="container">
          <UsersDropDown />

          <List>
            {userData.map(({ id, user, avatar, tweets, followers, subscribed }) => (
              <UserCard key={id} id={id} user={user} avatar={avatar} tweets={tweets} followers={followers} subscribed={subscribed} />
            ))}
          </List>

          {isFetching ? <Spinner />
            :
            data.length > 0 ?
              <LoadMore onClick={handleLoadMore}>load more</LoadMore>
              :
              <MyP>No more data</MyP>}
        </div>
      )}
    </>
  );
};

const useFetchData = (page: number, limit: number, usersFilter: string): { data?: any; isFetching: boolean } => {
  const query = addUrlParameters(page, limit, usersFilter);
  const { data, isFetching } = useGetUsersQuery(query);

  return { data, isFetching };
};

export default UserCardsList;