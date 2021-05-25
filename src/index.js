import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Router } from './Router';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
