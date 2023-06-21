import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
import Login from './User/Login';
import SignUp from './User/SignUp';
import Chat from './Chat';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const history = createBrowserHistory();
var path = window.location.hash
root.render(
  <React.StrictMode>
    <HashRouter history={history}>
      {path == ('#/' || '#/Login') && <Redirect to="/Login" />}
      <Route path={'/Login'} exact component={Login} />
      <Route path={'/SignUp'} exact component={SignUp} />
      <Route path={'/Chat'} exact component={App} />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
