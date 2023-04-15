import addCommaToNumber from '../helpers/addCommaToNumber';
import './App.css';
import UserCardsList from './UserCardsList/UserCardsList';

function App() {
	console.log(addCommaToNumber(100500));

	return (
		<div className="App">
			<UserCardsList />
		</div>
	);
}

export default App;
