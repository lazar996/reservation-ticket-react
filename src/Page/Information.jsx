import React from 'react'
import styled from 'styled-components'
import CurrentFlight from '../components/Route/CurrentFlight'
function Information() {
  return (

    <Block>
      <CurrentFlight/>
    </Block>

  )
}


const Block = styled.div`


    width: 900px ;
    height: 800px ;
    display: block;
    padding-top: 40px ;
    justify-content: center;
    align-items: center;
   
    margin: 0 auto ;

`

export default Information