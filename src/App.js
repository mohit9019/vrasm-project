import React, {Component} from "react";
// import { BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./html/home/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Preview from './html/preview/Preview';
import Registration from './html/registration/Registration';
import Cart from './html/cart/Cart';
import Login from "./html/login/Login";
import {Routes, Route,} from 'react-router-dom';
import Navba from './html/home/Navba';
function App() {
  return(<>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path="/Cart" element={<Cart />} />
          {/* <Route exact path="/Login" element={<Login />} /> */}
        </Routes>
    </>);
}

export default App;
