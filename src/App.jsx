import { Route, Switch } from 'react-router';
import './App.css';
import Record from './Record';
import Home from './Home';

function App() {
	return (
		<div className="app">
			<Switch>
				<Route path="/records/:id" component={Record} />
				<Route path="/" component={Home} exact />
			</Switch>
		</div>
	);
}

export default App;

