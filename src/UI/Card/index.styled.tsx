import styled from 'styled-components'
import { ReactComponent as Bg } from '../../img/question.svg'
import { ReactComponent as Logo } from '../../img/GoIt.svg'

export const Container = styled.div`
	position: relative;

	width: 380px;
	height: 460px;

	background-image: ${props => props.theme.linearGradient};

	box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
	border-radius: 20px;

	transition: transform 150ms ease-in-out, color 1500ms ease-in-out;

	&:hover,
	&:focus {
		transform: scale(1.05);
		transition: transform 150ms ease-in-out, color 150ms ease-in-out;
	}
`

export const LogoContainer = styled.div``

export const MyBg = styled(Bg)`
	padding: 28px 36px 18px;
`

export const MyLogo = styled(Logo)`
	position: absolute;
	top: 20px;
	left: 20px;
`
export const AvatarContainer = styled.div`
	position: absolute;
	left: 50%;
	transform: translate(-50%, -50%);

	&:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 100%;
		transform: translate(0%, -50%);
		width: 159px;
		height: 8px;
		background-color: ${props => props.theme.color.main};

		box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
			inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
		z-index: 0;
	}
`

export const AvatarCircle = styled.div`
	position: relative;
	width: inherit;
	height: inherit;

	display: flex;
	justify-content: center;
	align-items: flex-end;
	background-color: transparent;

	/* transform: translate(0, 50%); */

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		right: 100%;
		transform: translate(0%, -50%);
		width: 159px;
		height: 8px;
		background-color: ${props => props.theme.color.main};

		box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
			inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
		z-index: 0;
	}

	&:after {
		content: '';
		position: absolute;
		top: 50%;
		right: 50%;
		transform: translate(50%, -50%);
		width: 80px;
		height: 80px;
		background-color: ${props => props.theme.color.main};

		border-radius: 50%;

		z-index: 1;

		box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
			inset 0px -2.19582px 4.39163px #ae7be3, inset 0px 4.39163px 3.29372px #fbf8ff;
	}
`
export const MyAvatar = styled.img`
	position: relative;
	z-index: 10;
	background-color: #5736a3;
	border-radius: 50%;
`

export const TextContainer = styled.div`
	margin-top: 58px;

	& p {
		margin: 0px;

		font-family: ${props => props.theme.fontFamily};
		font-weight: ${props => props.theme.fontWeight.normal};
		font-size: ${props => props.theme.fontSize.normal};
		line-height: ${props => props.theme.lineHeight.textHeight};
		text-transform: uppercase;

		color: #ebd8ff;

		&:first-child {
			margin-bottom: 16px;
		}
	}
`

export const ChildrenContainer = styled.div`
	margin-top: 26px;
`
