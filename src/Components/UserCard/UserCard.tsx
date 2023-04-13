import MyCardUi from '../../UI/Card/MyCard';
import MyBtnUi from '../../UI/MyBtn/MyBtnUi';
import IUser from '../../interface/IUser';

const UserCard: React.FunctionComponent<IUser> = ({
	id,
	user,
	avatar,
	followers,
	tweets
}) => {
	return (
		<MyCardUi
			user={user}
			avatar={avatar}
			followers={followers}
			tweets={tweets}
			id={id}
		>
			<MyBtnUi name="follow" isActive={false} />
		</MyCardUi>
	);
};

export default UserCard;
