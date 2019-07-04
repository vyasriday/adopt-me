import React from 'react';
import { Link } from '@reach/router';

// You can not do error boundaries without class componetns.
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  // this is a method provided by react
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught on Error', error, info);
  }

  render() {
    // if thre is an error in any of the children then return this
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with the listing. <Link to="/">Click Here</Link> to
          get back to Home
        </h1>
      );
    }
    // else just give it a pass through.
    return this.props.children;
  }
}

export default ErrorBoundary;
