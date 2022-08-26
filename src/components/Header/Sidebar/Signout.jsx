import React from 'react'
import { useState, useEffect } from "react";
import styled from 'styled-components';
import authService from '../../../services/authService';
import {  NavLink } from "react-router-dom";

function Signout() {

    const [currentUser, setCurrentUser] = useState(undefined);

    
  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    authService.logout();
    authService.reload();
  };

  return (
    <List> {currentUser ? (
      <Menu>  
      <NLink  to={"/private"}>Profile</NLink>
      <NLink to={"/"}>My reservesion</NLink>
      <NLink to={"/home"} onClick={logOut}>Sign out</NLink>
      </Menu> 
      ) : (
        
      <>
       
       <NLink  to={"/login"}>Sign in</NLink>
       
     
      </>
            
        
      )}

 
    </List>
  )
}

const List = styled.div`

    align-items: center;
    justify-content: center;
    height:50px;
    
 
`;

const Menu = styled.ul`
    
    padding-left: 0;
    display: block;
    margin-bottom: 5px;
    text-align: center;
    
`




    const NLink = styled(NavLink)`
  
   display: flex;
   margin-bottom: 10px;
   
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        opacity: 40%;
        transition: 0.2s ease-in-out;
    }
    `
export default Signout