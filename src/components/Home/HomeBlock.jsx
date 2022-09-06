import React from 'react'
import styled from 'styled-components'
import Airport from '../Airport/Airport'

function HomeBlock() {
  return (
    <Block>
        <Airport/>
    </Block>
  )
}


const Block = styled.div`

    height: 500px;

`

export default HomeBlock