import './App.css';
import React, {Component} from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Landing from './components/layout/landing';
import Login from './components/layout/login_page';
import Regpage from './components/layout/reg_page';
import { Provider } from "react-redux";
import store from './store';

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
    </Switch>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
