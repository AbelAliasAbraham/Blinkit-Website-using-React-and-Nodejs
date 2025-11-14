import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App'; 
import './App.css'; // Assuming your CSS is in place
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router> 
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);