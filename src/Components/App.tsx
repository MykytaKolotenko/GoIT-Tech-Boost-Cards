import { Navigate, Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Header from './Header/Header'
import Tweets from '../Pages/Tweets'

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/tweets" element={<Tweets />} />

				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	)
}

export default App
