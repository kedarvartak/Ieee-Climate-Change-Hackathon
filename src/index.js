

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Assuming you have global styles

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* No Router here */}
  </React.StrictMode>,
  document.getElementById('root')
);
