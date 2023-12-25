import React from 'react';
import ReactDOM from 'react-dom/client';
//import configureStores from './redux/store/store';
import createStore from './redux/store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';

export const store = createStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
);