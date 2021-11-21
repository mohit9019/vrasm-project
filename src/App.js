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
import Like from './html/cart/Like';
import Buyerdash from "./html/dashboard/Buyerdash";
import Personalinfo from "./html/dashboard/Personalinfo";
import Editprofile from "./html/dashboard/Editprofile";
import Creatordash from "./html/creator dashboard/Creatordash";
function App() {
  return(<>
        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Like" element={<Like />} />
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/Buyerdash" element={<Buyerdash />} />
          <Route exact path="/Creatordash" element={<Creatordash />} />
          <Route exact path="/Preview" element={<Preview />} />
        </Routes>  */}
        {/*  <Buyerdash/> */}
        <Creatordash />
      </>);
}

export default App;
