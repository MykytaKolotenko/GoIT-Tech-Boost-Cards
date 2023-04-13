import Button from './index.styled';

interface IProps {
	name: string;
	isActive: boolean;
}

const MyBtnUi: React.FC<IProps> = ({ name, isActive }) => {
	return <Button isActive={isActive}>{name}</Button>;
};

export default MyBtnUi;
