import React from 'react'
import styled from 'styled-components'

function InfoReservationPage() {
  return (
    <Block>
      <Text>Welcome to the world of opportunity
      </Text>
      <div>
        <div></div>
      </div>
      </Block>
  )
}


const Block = styled.div`

    width: 900px ;
    height: 400px ;
    
  
    display: block;
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
    color: #094981;
    font-size: 20px ;

`

export default InfoReservationPage