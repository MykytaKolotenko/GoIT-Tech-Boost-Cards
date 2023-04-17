import { Link } from 'react-router-dom'
import { BgImage, MyHeroContainer } from './index.styled'

function Hero() {
	return (
		<>
			<MyHeroContainer>
				<BgImage />
				<Link to="tweets">If you want to see the best tweets. Click here</Link>
			</MyHeroContainer>
		</>
	)
}

export default Hero
