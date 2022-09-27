import React from 'react'
import { useState, useEffect } from "react";
import styled from 'styled-components';
import AuthService from "../../services/authService";
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
      console.log(user)
    }
  }, []);
  
  const logOut = () => {
    AuthService.logout();
  };

  return (
    <List> {currentUser ? (
            
    <NLink  title={currentUser.username}>
      <NLinkItem href="/private">Profile</NLinkItem>
      <NLinkItem href="/edit"> Settings </NLinkItem>
      <NLinkItem href="/myReservesion">My reservesion</NLinkItem>
      <Dropdown.Divider />
      <NLinkItem href={"/home"} onClick={logOut}>Sign out</NLinkItem>
    </NLink>
      ) : (
       <>
    <Btn  onClick={handleShow}>
      Log In
    </Btn>
    <Modal size="sm" className='modal' show={show} onHide={handleClose}>
      <Login/>
    </Modal>
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
    color: rgb(255, 255, 255);;
    background-color:  rgb(9, 73, 129);
    border: 1px solid #fff;
    justify-content: center;
    &.active{
      opacity: 50%;
    }
    :hover{
      color: rgb(255, 255, 255);
      border-bottom: 1px solid  rgb(9, 73, 129);
      background-color: rgb(9, 73, 129);
      border: 1px solid white;
    }`

const NLinkItem = styled(Dropdown.Item )`
    margin-top: 5px;
    &.active{
      background-color: #523909 !important;
      color: #682a2a; 
    }
    :focus{
      background-color: rgb(9, 73, 129);
    }
    :hover{
      color: rgb(235, 235, 235);
    }`


const NLink = styled(DropdownButton)`
    border: 1px solid #fff;
    margin-top: 10px;
    color: #fff;
    background-color: #fff;
    &.active{
      box-shadow: none;
      opacity: 50%;
    }
    :hover{
      color: rgb(255, 255, 255);
    }`

export default RightNavigation