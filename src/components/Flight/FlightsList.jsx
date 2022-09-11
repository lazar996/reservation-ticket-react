import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import getFlight from '../../services/getFlight';
import { ArrowRight } from 'react-bootstrap-icons';
import { BsGeoAlt ,BsChevronRight} from "react-icons/bs";
import FlightView from './FlightView';
function FlightsList() {

    const [flight, setFlight] = useState([]);
    const [arrivalAirport, SetArrivalAirport] = useState([]);
    const [departureAirport, SetDepartureAirport] = useState([]);
    console.log(flight)
    const value=new URLSearchParams(window.location.search);
    const code=value.get("code")
    console.log(code)

   useEffect(()=>{

    getFlight.getFlightByCode(code).then(
      (response)=>{

        setFlight(response.data);
        SetArrivalAirport(response.data.route.arrivalAirport);
        SetDepartureAirport(response.data.route.departureAirport);
      }, (error) =>{

        console.log(error)
      }
    )
   },[code]);

  return (
    <Container>
    
      <Wrapp>
        <BlockHeader>
          <Title>SELECT FLIGHTS   #{flight.code}</Title>
          </BlockHeader>
          <Header>
          <BsGeoAlt/>
          {departureAirport.city} <ArrowRight/> <BsGeoAlt/>{arrivalAirport.city} 
            <SubHeader>
         
            {departureAirport.name}    <BsChevronRight/> {arrivalAirport.name} 
            </SubHeader>
            </Header>
          <Body>

            <FlightView data={flight}/>
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

      padding: 5px ;
      font-size: 20px;
      color: white;
`
const Container=styled.div`
    background-image: url("https://image.cnbcfm.com/api/v1/image/106992130-1640090639500-gettyimages-1359982785-img_8658.jpeg?v=1640091082&w=1920&h=1080") ;
    display: flex;
    justify-content: center;

    width: 100%;
    height: 800px ;
    margin: 10px auto;
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
export default FlightsList