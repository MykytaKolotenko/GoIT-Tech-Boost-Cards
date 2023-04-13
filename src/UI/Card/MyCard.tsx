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
import IUser from '../../interface/IUser';

interface IProps extends IUser {
	children?: JSX.Element[] | JSX.Element;
}

const Card: React.FunctionComponent<IProps> = ({
	avatar,
	tweets,
	followers,
	children
}) => {
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
				<p> {tweets} tweets</p>
				<p> {followers} followers</p>
			</TextContainer>

			{children && <ChildrenContainer>{children}</ChildrenContainer>}
		</Container>
	);
};

export default Card;
