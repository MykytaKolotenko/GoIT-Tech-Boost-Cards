import Button from './index.styled';

interface IProps {
	name: string;
	isActive: boolean;
	cb: () => void;
}

const MyBtnUi: React.FC<IProps> = ({ name, isActive, cb }) => {
	return (
		<Button isActive={isActive} onClick={cb}>
			{name}
		</Button>
	);
};

export default MyBtnUi;
