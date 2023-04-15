import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface ButtonProps
	extends Omit<
		DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		'ref'
	> {
	isActive: boolean;
	theme: DefaultTheme;
}

const Button = styled.button`
	width: 196px;
	height: 50px;

	font-family: ${(props) => props.theme.fontFamily};
	font-size: ${(props) => props.theme.fontSize.btnSize};
	text-transform: uppercase;

	background-color: ${(props: ButtonProps) =>
		props.isActive ? props.theme.color.activeBtnColor : props.theme.color.main};
	color: ${(props: ButtonProps) => props.theme.color.secondary};

	border: none;
	border-radius: 10.3108px;

	box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

	cursor: pointer;

	transition: transform 150ms ease-in-out, color 1500ms ease-in-out;

	&:hover {
		transform: scale(1.2);
		transition: transform 150ms ease-in-out, color 150ms ease-in-out;
	}
`;

export default Button;
