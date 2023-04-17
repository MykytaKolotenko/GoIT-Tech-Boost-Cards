import styled from 'styled-components'
import { ReactComponent as GoIt } from '../../img/GoIt.svg'

export const Logo = styled(GoIt)``

export const MYHeader = styled.header`
	background-color: rgb(92, 211, 168);
	background: linear-gradient(179deg, rgba(92, 211, 168, 1) -10%, #311375 85%);
	& div {
		padding: 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		& nav {
			display: flex;

			& a {
				color: transparent;
				background: rgba(255, 255, 255, 0.5);
				-webkit-background-clip: text;
				-moz-background-clip: text;
				background-clip: text;
				text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);

				transition: color linear 0.2s;
				&.active {
					color: transparent;
					background: ${props => props.theme.color.activeBtnColor};
					-webkit-background-clip: text;
					-moz-background-clip: text;
					background-clip: text;
					text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
				}
				&:not(:last-child) {
					margin-right: 30px;
				}
			}
		}
	}
`
