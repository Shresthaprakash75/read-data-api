import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import ReduxStore from './store/store';

const store = ReduxStore();
store.subscribe(() => {
console.log(store.getState())
})


ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);