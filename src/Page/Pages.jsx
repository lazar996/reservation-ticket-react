import React from 'react'
import {Route, Routes} from "react-router-dom"
import Login from "../components/Login";
import Signup from "../components/Signup";

import Private from "../components/Profile";
import CheckIn from './CheckIn';
import BookAflight from './BookAflight';
import Information from './Information';
import SpecialOffers from './SpecialOffers';
import Home from '../components/Home/Home';
function Pages() {
  return (

    <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path='/CheckIn' element={<CheckIn/>}/>
    <Route path='/bookAflight' element={<BookAflight/>}/>
    <Route path='/information' element={<Information/>}/>
    <Route path='specialOffers' element={<SpecialOffers/>}/>
    <Route path="/private" element={<Private />} />

    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    
  </Routes>
  )
}


export default Pages