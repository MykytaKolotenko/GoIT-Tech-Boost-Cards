import styled from 'styled-components'

export const Container = styled.div`
	& h2 {
		font-size: 30px;
		letter-spacing: 2px;

		color: transparent;
		background: ${props => props.theme.color.activeBtnColor};
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
		text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
	}

	& p {
		color: transparent;
		background: ${props => props.theme.color.activeBtnColor};
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
		text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
	}
`
