import React from 'react'
import {  NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import AuthService from "../../services/authService";

function CenterNavigation() {

    const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);


  return (
    <List>
       <NLink to={"/home"}>Home</NLink>
       <NLink  to={"/checkIn"}>Check-in</NLink>
       <NLink  to={"/bookAflight"}>Book a flight</NLink>
       <NLink to={"/information"}>Information</NLink>
       <NLink to={"/specialOffers"}>  Special offers</NLink>
       <NLink to={"/reservationTicket"}> Reservation ticket</NLink>
       {currentUser && (
        <NLink to={"/private"} className="nav-link">
            Private
          </NLink> )}
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height:60px;
    width: 100%;
    margin: 0 auto;
`;


const NLink = styled(NavLink)`
  
    width:120px;
    color: #fff;
    display: flex;
    align-items: center;
    height:60px;
    justify-content: center;
    text-decoration: none;
    cursor:pointer;
   
    &.active{
      opacity: 50%;
    }
    :hover{
      color: rgb(9, 73, 129);
      border-bottom: 1px solid  rgb(9, 73, 129);
      background-color: white;
    }`

 

export default CenterNavigation