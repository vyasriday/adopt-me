import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import { Router } from '@reach/router';
import Details from './Details';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
import NavBar from './Navbar';
const App = () => {
	// get the whole array, will be used to pass down to consumers
	const themeHook = useState('darkblue');
	return (
		<StrictMode>
			<ThemeContext.Provider value={themeHook}>
				<ErrorBoundary>
					<div>
						<NavBar />
						<Router>
							<SearchParams path='/' />
							<Details path='/details/:id' />
						</Router>
					</div>
				</ErrorBoundary>
			</ThemeContext.Provider>
		</StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
