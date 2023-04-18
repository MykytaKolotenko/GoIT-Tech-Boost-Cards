import styled from 'styled-components'

export const MyContainer = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

export const MyLabel = styled.label`
	margin-right: 20px;

	color: transparent;
	background: ${props => props.theme.color.activeBtnColor};
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
`

export const MySelect = styled.select`
	color: ${props => props.theme.color.secondary};
	background-color: ${props => props.theme.color.activeBtnColor};
	padding: 5px 10px;

	border: solid 1px transparent;
	border-radius: 5px;
`
