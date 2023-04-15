import { useGetUsersQuery } from '../../Redux/userApi';
import UserCard from '../UserCard/UserCard';
import { List } from './index.styled';

function UserCardsList() {
	const { data, isFetching } = useGetUsersQuery('');

	return (
		<>
			{isFetching && <h1>IsLoading</h1>}

			<List>
				{!isFetching &&
					data?.map(({ id, user, avatar, tweets, followers, subscribed }) => (
						<li key={id}>
							<UserCard
								id={id}
								user={user}
								avatar={avatar}
								tweets={tweets}
								followers={followers}
								subscribed={subscribed}
							/>
						</li>
					))}
			</List>
		</>
	);
}

export default UserCardsList;
