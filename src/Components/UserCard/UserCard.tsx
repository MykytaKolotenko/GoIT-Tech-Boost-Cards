import MyCardUi from '../../UI/Card/MyCard';
import MyBtnUi from '../../UI/MyBtn/MyBtnUi';

const UserCard: React.FunctionComponent = () => {
	return (
		<MyCardUi>
			<MyBtnUi name="follow" isActive={false} />
		</MyCardUi>
	);
};

export default UserCard;
