import React from 'react'
import {  NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import AuthService from "../../services/authService";
import Modal from 'react-bootstrap/Modal';

import Login from '../Login';
function RightNavigation() {

    const [currentUser, setCurrentUser] = useState(undefined);

    const [show, setShow] = useState(false);
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <List> {currentUser ? (
            
            <NLink to={"/login"} className="nav-link" onClick={logOut}>
              Sign in
            </NLink>
         
      ) : (
        
            <>

    <Btn  onClick={handleShow}>
      Log In
    </Btn>
                <Modal size="sm" className='modal' show={show} onHide={handleClose}>

              <Login/>
                </Modal>

           {/* <NLink to={"/login"} className="nav-link">Log In</NLink> */}
           {/*  <NLink to={"/signup"} className="nav-link">Sign up</NLink> */}
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

const Btn = styled.button`

    margin-top: 10px;
    margin-right: 10px;
    width: 100px;
    height: 40px;
    border: none;
    color: rgb(9, 73, 129);;
    background-color: #ffffff;
    border-radius: 2px;
    justify-content: center;

    &.active{
      opacity: 50%;
    }
    :hover{
      color: rgb(255, 255, 255);
      border-bottom: 1px solid  rgb(9, 73, 129);
      background-color: rgb(9, 73, 129);
      border: 1px solid white;
    }
    
    
`


const NLink = styled(NavLink)`
    
    display: flex;
    width:100px;
    color: #ffffff;
    justify-content: center;
    align-items: center;
    height:60px;
    float: right;
    text-decoration: none;
    cursor:pointer;
   
    &.active{
      opacity: 50%;
    }
    :hover{
      color: rgb(9, 73, 129);
      border-bottom: 1px solid  rgb(9, 73, 129);;
      background-color: white;
    }`

export default RightNavigation