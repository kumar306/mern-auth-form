import './App.css';
import React, {Component} from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Landing from './components/layout/landing';
import Login from './components/layout/login_page';
import Regpage from './components/layout/reg_page';
import { Provider } from "react-redux";
import store from './store';
import Dashboard from './components/layout/dashboard';
import PrivateRoute from './components/privateroute';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utils/set_auth_token';
import {setCurrentUser,logout} from './actions/auth_actions';

if(localStorage.jwtToken)
{
  const tok=localStorage.jwtToken;
  setAuthToken(tok);
  const decoded_token=jwtDecode(tok);
  store.dispatch(setCurrentUser(decoded_token));
  const time_now=Date.now();
  if(decoded_token.exp<time_now)
  {
    store.dispatch(logout());
    window.location.href="/login";
  }
}

function App() {
  return (
    <>
    <Provider store={store}>
    <Navbar />
    <br></br>
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Landing}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/register' component={Regpage}></Route>
      <PrivateRoute exact path='/dashboard' component={Dashboard}></PrivateRoute>
    </Switch>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
