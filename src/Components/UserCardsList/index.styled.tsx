import styled from 'styled-components'

export const List = styled.ul`
	display: flex;

	margin: 0px;
	padding: 30px;

	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	grid-column-gap: 20px;
	grid-row-gap: 20px;

	list-style: none;
`

export const LoadMore = styled.button`
	margin-bottom: 30px;

	width: 196px;
	height: 50px;

	font-family: ${props => props.theme.fontFamily};
	font-size: ${props => props.theme.fontSize.btnSize};
	text-transform: uppercase;

	color: ${props => props.theme.color.activeBtnColor};
	background-image: ${props => props.theme.linearGradient};

	text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
	box-shadow: 0px 3.43693px 3.43693px rgba(255, 255, 255, 0.25);

	border-radius: 10px;
	border: none;

	cursor: pointer;

	transition: transform 150ms ease-in-out, color 1500ms ease-in-out;

	&:hover {
		transform: scale(1.2);
		transition: transform 150ms ease-in-out, color 150ms ease-in-out;
	}
`

export const MyP = styled.p`
	font-size: 30px;

	color: transparent;
	background: ${props => props.theme.color.activeBtnColor};
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
`
