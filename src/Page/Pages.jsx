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
import MyReservesion from './myReservesion';
import Edit from '../components/Settings/Edit';
import ReservationTicket from '../components/Reservation Ticket/ReservationTicket';
import FlightsList from '../components/Flight/FlightsList';
function Pages() {
  return (

    <Routes>

    <Route path="/home" element={<Home/>} />
    <Route path='/CheckIn' element={<CheckIn/>}/>
    <Route path='/bookAflight' element={<BookAflight/>}/>
    <Route path='/information' element={<Information/>}/>
    <Route path='specialOffers' element={<SpecialOffers/>}/>
    <Route path="/private" element={<Private />} />
    <Route path='/edit' element={<Edit/>}/>
    <Route path='/myReservesion' element={<MyReservesion/>}/>
    <Route path='/reservationTicket' element={<ReservationTicket/>}/>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path='/flight-list' element={<FlightsList/>}/>
    
  </Routes>
  )
}


export default Pages