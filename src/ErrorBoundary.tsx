import React, { ErrorInfo } from 'react';
import { Link, Redirect, RouteComponentProps } from '@reach/router';

class ErrorBoundary extends React.Component<RouteComponentProps> {
	public state = {
		hasError: false,
		redirect: false
	};
	// this gets called when error happens, just like getDerivedStateFromProps this is static and returns state info
	public static getDerivedStateFromError() {
		return {
			hasError: true,
			redirect: false,
		};
	}

	public componentDidCatch(error: Error, info: ErrorInfo) {
		// use some error logging service to send error data
		console.error('ErrorBoundary caught an error', error, info);
	}

	// eslint-disable-next-line react/no-deprecated
	public componentDidUpdate() {
		if (this.state.hasError) {
			setTimeout(() => this.setState({ redirect: true }), 5000);
		}
	}
	render() {
		const { hasError, redirect } = this.state;

		if (redirect) {
			return <Redirect to='/' />;
		}
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
