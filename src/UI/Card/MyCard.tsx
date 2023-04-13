import {
	AvatarCircle,
	AvatarContainer,
	Container,
	LogoContainer,
	MyAvatar,
	MyBg,
	MyLogo,
	TextContainer,
	ChildrenContainer
} from './index.styled';

import avatar from '../../img/Hansel.png';

interface IProps {
	children?: JSX.Element[] | JSX.Element;
}

const Card: React.FunctionComponent<IProps> = ({ children }) => {
	return (
		<Container>
			<LogoContainer>
				<MyLogo />
				<MyBg />
			</LogoContainer>

			<AvatarContainer>
				<AvatarCircle>
					<MyAvatar src={avatar} alt="user avatar" width="62px" />
				</AvatarCircle>
			</AvatarContainer>

			<TextContainer>
				<p> 100,500 tweets</p>
				<p> 10,453 followers</p>
			</TextContainer>

			{children && <ChildrenContainer>{children}</ChildrenContainer>}
		</Container>
	);
};

export default Card;
