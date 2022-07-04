import React from 'react'
import {Route, Routes} from "react-router-dom"
import Login from "../components/Login";
import Signup from "../components/Signup";
import Home from "../components/Home";
import Private from "../components/Profile";
function Pages() {
  return (

    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/private" element={<Private />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    
  </Routes>
  )
}


export default Pages