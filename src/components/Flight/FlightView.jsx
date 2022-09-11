import React from 'react'
import styled from 'styled-components'
import dateFormat from "dateformat";
import { BsFillClockFill ,BsFillPeopleFill,BsWallet2} from "react-icons/bs";
import Button from 'react-bootstrap/Button';
function FlightView(data) {
     
      const departureDate= new Date(data.data.departureDate)
      const estimatedArrivalDate = new Date(data.data.estimatedArrivalDate)
      const duration = new Date(estimatedArrivalDate).getTime() - new Date(departureDate).getTime()

      const min = Math.floor((duration/1000/60) << 0)
      const hours= (min/60)
      const rhours = Math.floor(hours);
      const minutes = (hours - rhours) * 60;
      const rminutes = Math.round(minutes);
  return (
    <Container>
        <Wrapp>
            <Header>
               <HeaderText>DEPARTURE TIME </HeaderText>
               <HeaderText>DURATION</HeaderText>
               <HeaderText>FREE SEATS</HeaderText>
               <HeaderText>PRICE</HeaderText>
            </Header>
            <BodyIcon>
                <BodyText><SimpleText>{dateFormat(data.data.departureDate,"fullDate")}</SimpleText></BodyText>
                <BodyText><BsFillClockFill/></BodyText>
                <BodyText><BsFillPeopleFill/></BodyText>
                <BodyText><BsWallet2/></BodyText>
            </BodyIcon>
            <Body>
                <BodyText>{dateFormat(data.data.departureDate,"UTC:h:MM:ss TT")}</BodyText>
                <BodyText>{rhours}<SimpleText>h </SimpleText>{rminutes}<SimpleText>min</SimpleText></BodyText>
                <BodyText>{data.data.quota}</BodyText>
                <BodyText>{data.data.price}<SimpleText>Rsd</SimpleText></BodyText>
            </Body>

            <Footer>

            <Button variant="primary">Reserve</Button>
            </Footer>
        </Wrapp>
    </Container>
  )
}

const Footer = styled.div`

    display: flex ;
    justify-content: center ;
    align-items: center;
    padding-top: 30px ;
`

const BodyIcon = styled.div`

    font-size: 15px ;
    color:#094981;
`

const BodyText = styled.div`

    font-size: 25px ;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    padding-top: 5px ;
`
const Body = styled.div`
    background-color: #d9dbde ;
    
`

const Container = styled.div`

   
    width: 850px ;
    height: 200px ;
    background-color: #fff ;
    margin: 0 auto ;
    border-radius: 5px ;
`

const Wrapp = styled.div`


`
const HeaderText = styled.div`

    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 25%;

`
const Header = styled.div`
    width: 100% ;
    height: 30px ;
    color: #fff;
    background-color: #094981;
`

const SimpleText= styled.div`
    display: flex ;
    justify-content: center ;
    align-items: center;
    font-size: 15px ;
`
export default FlightView