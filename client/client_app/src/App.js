import './App.css';
import React, {Component} from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
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
    <Routes>
      <Route path='/' element={<Landing />}></Route>
      <Route path='/register' element={<Regpage />}></Route>
      <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
