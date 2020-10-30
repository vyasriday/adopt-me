import React, { StrictMode, useState, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import { Router } from '@reach/router';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
const Details = lazy(() => import('./Details'));

// import NavBar from './Navbar';
const App = () => {
	// get the whole array, will be used to pass down to consumers
	const themeHook = useState('darkblue');
	return (
		<StrictMode>
			<ThemeContext.Provider value={themeHook}>
				<ErrorBoundary>
					<div>
						<Suspense fallback={<h1>Loading Routes ... </h1>}>
							<Router>
								<SearchParams path='/' />
								<Details path='/details/:id' />
							</Router>
						</Suspense>
					</div>
				</ErrorBoundary>
			</ThemeContext.Provider>
		</StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
