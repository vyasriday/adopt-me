import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import SearchParmas from './SearchParams';

const App = () => {
  return (
    <div>
      <StrictMode>
        <h1>Adopt Me</h1>
        <SearchParmas />
      </StrictMode>
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));
