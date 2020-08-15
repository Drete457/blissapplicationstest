import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import Patch from './Controller/router';
import { Provider } from 'react-redux';
import { store } from './Components/redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Patch />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
