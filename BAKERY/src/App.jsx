import { Route,Routes } from 'react-router-dom'
import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="login" element={<Login/>}/>

        </Route>
      </Routes>

    </>
  );
}

export default App;