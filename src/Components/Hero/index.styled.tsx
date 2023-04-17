import styled from 'styled-components'
import image from '../../img/medium-shot-happy-friends-taking-selfie.jpg'

export const MyHeroContainer = styled.div`
	position: relative;
	background-color: black;

	& a {
		padding: 15px;
		max-width: 50%;

		font-size: 30px;
		text-decoration: none;
		position: absolute;
		top: 50%;
		left: 50%;

		transform: translate(-50%, -50%);

		color: transparent;
		background: ${props => props.theme.color.activeBtnColor};
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
		text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
	}
`

export const BgImage = styled.div`
	height: 500px;

	background-image: url(${image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	opacity: 50%;
`
