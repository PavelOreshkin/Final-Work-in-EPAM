import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import history from './history'
import { Router } from 'react-router-dom';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'))