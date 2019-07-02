import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import SearchParmas from './SearchParams';
import { Router, Link } from '@reach/router';
import Details from './Detail';

const App = () => {
  return (
    <div>
      <StrictMode>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
        <Router>
          <SearchParmas path="/" />
          <Details path="/details/:id" />
        </Router>
      </StrictMode>
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));
