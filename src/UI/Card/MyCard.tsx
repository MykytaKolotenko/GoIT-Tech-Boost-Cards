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

interface IProps {
	children?: JSX.Element[] | JSX.Element;
	avatar: string;
	tweets: string;
	followers: string;
	user: string;
	id: string;
	btnAction?: () => void;
}

const Card: React.FunctionComponent<IProps> = ({
	avatar,
	tweets,
	followers,
	children,
	id
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
