import React from 'react'
import styled from 'styled-components';
import { ArrowRight } from 'react-bootstrap-icons';
import { BsGeoAlt ,BsChevronRight} from "react-icons/bs";

function DialogDetailsFlight(id) {

  return (
    <Container>
         <Wrapp>
        <BlockHeader>
          <Title>SELECT FLIGHTS </Title>
          </BlockHeader>
          <Header>
          <BsGeoAlt/>
         <ArrowRight/> <BsGeoAlt/> 
            <SubHeader>
         
           <BsChevronRight/> 
            </SubHeader>
            </Header>
          <Body>

            
          </Body>
    </Wrapp>

    </Container>
  )
}
const SubHeader = styled.div`

    display: inline-block ;
    margin-left: 100px ;
`

const Body=styled.div`
    height: 250px ;
`
const Title = styled.div`
      font-size: 20px;
      color: white;
`
const Container=styled.div`

    display: flex;
    justify-content: center;

    width: 100%;
    height: 350px ;
    margin: 0 auto;
`

const Wrapp = styled.div`
    width: 900px ;
    height: 350px ;
    border-radius: 5px ;
    background: linear-gradient( #054c86,#02265c);
   
`

const BlockHeader= styled.div`

    padding: 10px;
    height: 60px ;
    background-color: #094981;
    color:#fff;
    border-bottom: 1px solid #fff ;
`
const Header = styled.div`
    padding-left: 30px ;
    padding-top: 10px ;
    height: 60px ;
    font-size: 20px ;
    text-transform: uppercase;
    color: #fff
`

export default DialogDetailsFlight