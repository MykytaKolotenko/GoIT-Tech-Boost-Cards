import { useGetUsersQuery } from '../../Redux/userApi';
import UserCard from '../UserCard/UserCard';

function UserCardsList() {
	const { data, isFetching } = useGetUsersQuery('');

	return (
		<>
			{isFetching && <h1>IsLoading</h1>}

			{!isFetching &&
				data?.map(({ id, user, avatar, tweets, followers }) => (
					<UserCard
						key={id}
						id={id}
						user={user}
						avatar={avatar}
						tweets={tweets}
						followers={followers}
					/>
				))}
		</>
	);
}

export default UserCardsList;
