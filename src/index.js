import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import { Provider } from 'react-redux';
import store from './redux/store/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Layout from './components/Layout/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
