import React from 'react'
import styled from 'styled-components'
import CheckInBody from '../components/CheckIn/CheckInBody'
function CheckIn() {
  return (
    <Container>
       <Text>Check in online from 48 hours to 1 hour before departure</Text>
      <CheckInBody/>
    </Container>
  )
}

const Container = styled.div`
  
  width: 100%;
  height: 800px;

  background-image: url("https://img.freepik.com/free-photo/top-view-white-toy-plane-map_23-2148666303.jpg?w=2000") ;
 
 
  
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

export default CheckIn