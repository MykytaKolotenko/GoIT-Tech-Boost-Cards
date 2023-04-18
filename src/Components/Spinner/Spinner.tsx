import { ThreeDots } from 'react-loader-spinner'
import Container from './index.styled'

function Spinner() {
	return (
		<Container>
			<ThreeDots
				height="100"
				width="100"
				color="#5CD3A8"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
				ariaLabel="three-circles-rotating"
			/>
		</Container>
	)
}

export default Spinner
