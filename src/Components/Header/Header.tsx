import { NavLink } from 'react-router-dom'
import { Logo, MYHeader } from './index.styled'

function Header() {
	return (
		<MYHeader>
			<div className="container">
				<Logo />
				<nav>
					<NavLink
						className={({ isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
						to="/tweets"
					>
						Tweets
					</NavLink>
				</nav>
			</div>
		</MYHeader>
	)
}

export default Header
