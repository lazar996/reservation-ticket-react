import React from 'react'
import styled from 'styled-components';
import InfoNews from './InfoNews';
import Oneway from './Oneway';
import Return from './Return';
import { useState } from 'react';
import SearchByCode from './SearchByCode';
function ReservationForm() {
    const [active, setActive] = useState(1)

    const SetView = (active) => {
      setActive(active);
    };
  
  
    const ActiveView = () => {
      switch (active) {
        case 1:
          return <Oneway />;
        case 2:
          return <Return />;
          case 3:
            return <SearchByCode />;
        default:
          return <Return />;
      }
    };
  
    return (
      <>
      <Block>

        <BtnList>
      
        <List>
        <Btn className="button" onClick={() => SetView(1)}>
         Oneway
        </Btn>
        <Btn className="button" onClick={() => SetView(2)}>
          Return
        </Btn>
        <Btn className="button" onClick={() => SetView(3)}>
          Search By Code
        </Btn>
        {ActiveView()}
         </List>
         </BtnList>
      <InfoNews/>
      </Block>
      
      </>
    )
  }
  
  const BtnList = styled.div`
  
  
      width: 900px ;
      height: 60px ;
      background-color: #094981 ;
      display: flex ;
      margin: 0 auto ;
      
  `
  
  
  const Btn = styled.button`
  
      width:120px;
      color: #fff;
      margin: 0 auto ;
      align-items: center;
      height:60px;
      justify-content: center;
      text-decoration: none;
      border: none ;
      cursor:pointer;
      background-color:#094981; 
      
      &.active{
        opacity: 50%;
      }
      :hover{
        color: rgb(9, 73, 129);
       
        background-color: white;}
  `
  
  const List = styled.div`
      
  
      
  `;
  
  
 
  
  const Block = styled.div`
  
      width: 100%;
      height: 270px ;

     
      justify-content: center;
      align-items: center;
      margin:0 auto ;
      
  `
 


export default ReservationForm