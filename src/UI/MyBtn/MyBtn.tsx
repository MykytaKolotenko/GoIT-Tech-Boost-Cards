import Button from './btn.styled';
import 'animate.css';

interface IProps {
	name: string;
	isActive: boolean;
}

const MyBtn: React.FC<IProps> = ({ name, isActive }) => {
	return <Button isActive={isActive}>{name}</Button>;
};

export default MyBtn;
