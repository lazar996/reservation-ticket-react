import React from 'react'
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import RightNavigation from './RightNavigation'
function NavbarElements({toggle}) {
  return (
    <Nav>
        <Logo> 
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Yugoslavia_JAT_Logo.svg' width={"80px"} alt="/" className="d-inline-block align-top" />
        </Logo>
        <MobileIcon onClick={toggle}>
        <FaBars/>
        </MobileIcon>
        
        <NavMenu>
        <NavLink  to={"/home"}>Home</NavLink>
        <NavLink  to={"/checkIn"}>Check-in</NavLink>
       <NavLink  to={"/bookAflight"}>Book a flight</NavLink>
       <NavLink to={"/information"}>Information</NavLink>
       <NavLink to={"/specialOffers"}>  Special offers</NavLink>
       </NavMenu>
       <NavBtn>
            <RightNavigation/>
       </NavBtn>
    </Nav>
  )
}

const Logo = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
`

 const Nav = styled.nav`

  background: rgb(9, 73, 129);
  height: 80px;
  display: flex;
  justify-content: space-between;
 // padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

 const NavLink = styled(Link)`
 
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  
  height: 100%;
  cursor: pointer;
  &.active {
    
    opacity: 50%;
    }
    :hover{
      color: rgb(9, 73, 129);
      border-bottom: 1px solid  rgb(9, 73, 129);
      background-color: white;
    }
  
`;

 const MobileIcon = styled.div`

  padding-right: 30px;
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

 const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

 const NavBtn = styled.nav`
  
  justify-content: center;
  display: flex;
  align-items: center;
  margin-right: 24px;
  padding-bottom: 10px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

 const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export default NavbarElements