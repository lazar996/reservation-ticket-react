
import React from 'react'
import styled from 'styled-components';

import ReservationForm from './ReservationForm';
function ReservationTicket() {


 
  return (
    
    <Block>
        <Text>Explore your travel opportunities with Jat</Text>
      <ReservationForm/>
    </Block>
    
 
  )
}

const Block = styled.div`

    width: 100%;
    height: 800px ;
    background-image: url("https://static.vecteezy.com/system/resources/previews/002/065/154/original/airplane-passport-and-boarding-pass-on-empty-background-with-copy-space-for-text-travel-background-illustration-free-vector.jpg") ;
   
    justify-content: center;
    align-items: center;
    margin:0 auto ;
    
`

const Text = styled.div`
 width: 100%;
    height: 50px ;
    display: flexbox;
    justify-content: center;
    align-items: center;
    margin:0 auto ;
    font-family: 'Alata', sans-serif;
    color:#094981;
    font-size: 20px ;

    

`

export default ReservationTicket