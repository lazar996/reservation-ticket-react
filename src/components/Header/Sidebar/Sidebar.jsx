import React from 'react'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'

import {Link } from 'react-router-dom'
import Signout from './Signout'
function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>

        <SidebarWrapper>
            <SidebarMenu>
             
                <SidebarLink  to="/home" onClick={toggle}>Home</SidebarLink>
                <SidebarLink  to={"/checkIn"}  onClick={toggle}>Check-in</SidebarLink>
                <SidebarLink  to={"/bookAflight"}  onClick={toggle}>Book a flight</SidebarLink>
                <SidebarLink to={"/information"}  onClick={toggle}>Information</SidebarLink>
                <SidebarLink to={"/specialOffers"} onClick={toggle}>  Special offers</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
         
            <Signout/>
    
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: linear-gradient(#02afff, #02265c);
    display: grid;
    align-items: center;
    top:0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen})=> (isOpen ? '100%': '0')};
    top: ${({isOpen})=> (isOpen ? '0': '-100%')};
    
`
const CloseIcon = styled(FaTimes)`
    color: #fff;
`
const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
const SidebarWrapper = styled.div`
    color: #fff;
    
    
`
const SidebarMenu = styled.ul`
    padding-left: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6,60px);
    }
`
const SidebarLink = styled(Link)`
    display: flex;
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
const SideBtnWrap = styled.div`
        display: flex;
        justify-content: center;
        right: 1.5rem;
    `
  
export default Sidebar