import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './assets/index.css';
import App from './containers/app/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
import { store, StoreContext } from './store/store';

export const history = createBrowserHistory();

ReactDOM.render(
   <StoreContext.Provider value={store}>
      <Router history={history}>
         <App />
      </Router>
   </StoreContext.Provider>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
