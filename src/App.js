import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import { Link, Router } from '@reach/router';
import Details from './Details';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
	return (
		<StrictMode>
			{/* <ErrorBoundary> */}
			<div>
				<header>
					<Link to='/'>Adopt Me!</Link>
				</header>
				<Router>
					<SearchParams path='/' />
					<Details path='/details/:id' />
				</Router>
			</div>
			{/* </ErrorBoundary> */}
		</StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
