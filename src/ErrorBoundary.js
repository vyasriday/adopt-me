import React from 'react';
import { Link } from '@reach/router';

class ErrorBoundary extends React.Component {
	state = {
		hasError: false,
	};
	// this gets called when error happens, just like getDerivedStateFromProps this is static and returns state info
	static getDerivedStateFromError() {
		return {
			hasError: true,
		};
	}

	componentDidCatch(error, info) {
		// use some error logging service to send error data
		console.error('ErrorBoundary caught an error', error, info);
	}
	render() {
		const { hasError } = this.state;
		if (hasError) {
			// good to have fallback UI here.
			return (
				<h1>
					Something went wrong!!! <Link to='/'>Go to Home</Link>
				</h1>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
