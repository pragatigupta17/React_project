import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar, Foot } from "./Navbar";
import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Contact from "./Contact";
import Table from "./Table";
import About from "./About";
import "./App.css";

function App() {
  let local = useLocation();
  let auth = local.pathname === "/login" || local.pathname === "/signup";

  return (
    <>
      {!auth && <Navbar />}

      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/table" element={<Table />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {!auth && <Foot />}
    </>
  );
}

export default App;
