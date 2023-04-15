import MyCardUi from '../../UI/Card/MyCard';
import MyBtnUi from '../../UI/MyBtn/MyBtnUi';
import addCommaToNumber from '../../helpers/addCommaToNumber';
import IUser from '../../interface/IUser';

const UserCard: React.FunctionComponent<IUser> = ({
	user,
	avatar,
	followers,
	tweets
}) => {
	const followersStringWithComma = addCommaToNumber(followers);
	const tweetsStringWithComma = addCommaToNumber(tweets);

	return (
		<MyCardUi
			user={user}
			avatar={avatar}
			followers={followersStringWithComma}
			tweets={tweetsStringWithComma}
		>
			<MyBtnUi name="follow" isActive={false} />
		</MyCardUi>
	);
};

export default UserCard;
