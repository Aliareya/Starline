import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/about/About";
import Register from "../pages/signup/Register";
import Login from "../pages/login/Login";
import Contact from "../pages/contact/Contact"
import FAQ from "../pages/faq/FAQ";
import Privacy from "../pages/privacy/Privacy";
import Cars from "../pages/cars/Cars";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/cars" element={<Cars/>} />

        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
  );
}

export default AppRoutes;
