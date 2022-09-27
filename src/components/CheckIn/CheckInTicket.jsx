import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import TicketService from '../../services/TicketService';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BsFillInfoCircleFill ,BsFillCheckCircleFill} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
function CheckInTicket() {

  const value=new URLSearchParams(window.location.search);
  const email=value.get("email")
  const numberTicket=value.get("numberTicket")
  const lastName=value.get("lastName")

  const [ticket, setTicket] = useState([])
  const [flight, setFlight] = useState([])
  const [arrivalAirport, setArrivalAirport] =useState([])
  const [departureAirport, setDepartureAirport] =useState([])
  const [user, setUser] =useState([])

  const navigate = useNavigate();
  useEffect(()=>{
  
    TicketService.getCheckIn(email,numberTicket,lastName ).then(
      (response)=>{
        setTicket(response.data);
        setFlight(response.data.flight)
        setArrivalAirport(response.data.flight.route.arrivalAirport)
        setDepartureAirport(response.data.flight.route.departureAirport)
        setUser(response.data.user)
      }, (error) =>{
       
        
        console.log(error)
      }
    )
   },[email,numberTicket,lastName]);

   const getFormattedDate2 = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString();
  }

  const handleEdit = async (e) =>{ 
    try{
    await TicketService.postCheckInCart(ticket.id).then(
      (response)=>{
        navigate("/checkIn");
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  } catch (err) {
    console.log(err);
  }     
       }
   
  return (
    <Container>
        <Wrapp>
        <Form onSubmit={handleEdit}>
            <Header><HeaderText><BsFillCheckCircleFill/>   Check In Your Ticket</HeaderText></Header>
            <Table striped bordered hover size="sm">
    <Thead>
      <tr>
 
        <th>Code</th>
        <th>Departure</th>
        <th>Estimated Time Of Arrival</th>
        <th>Origin</th>
        <th>Destination</th>
    
      </tr>
    </Thead>
    <Tbody>
        
        <tr>
          <td>{ticket.numberTicket}</td>
          <td>{getFormattedDate2(flight.departureDate)}</td>
          <td>{getFormattedDate2(flight.estimatedArrivalDate)}</td>
          <td>{arrivalAirport.city}</td>
          <td>{departureAirport.city}</td>
          </tr>
       
      
      
    </Tbody>

    </Table>
    <User>
      <HeaderUserPanel><HeaderText><BsFillInfoCircleFill/>    User Info</HeaderText></HeaderUserPanel>
      <Table striped bordered hover size="sm">
    <Thead>
      <tr>
 
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
       
    
      </tr>
    </Thead>
    <Tbody>
        
        <tr>
          <td>1</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          </tr>
       
      
      
    </Tbody>

    </Table>
    </User>
    <CheckTicket>
      <Button type='submit'>Check your ticket</Button>
      <p>vaša karta će biti poslata na mail adresu, obavezno prikazivanje čekirane karte</p>
    </CheckTicket>
    </Form>
    <Animation>

    </Animation>
        </Wrapp>
    </Container>
  )
}


const CheckTicket= styled.div`
  height: 200px;
`
const HeaderUserPanel= styled.div`
  
  width: 900px;
  height: 50px;
  background-color: #094981;
`

const User = styled.div`


    width: 900px;
    height: 150px;

`
const Animation= styled.div`
  
  width: 900px;
  height: 80px;
  background-image: url("https://c.tenor.com/qsdblRVNZysAAAAC/flying-airplane.gif");
  background-size: 80px 70px;
`
const Tbody= styled.tbody`

    color: #fff;
    font-size: 20px;
`

const Thead = styled.thead`

    background-color: #094981; 
    color: #fff;
`
const Container = styled.div`
  
    width: 900px;
    height: 800px;
    margin: 0 auto;
`
const Wrapp =styled.div`
    width: 900px;
    height: 50px;
    background-color: #094981; 
    margin-top: 10px;
`

const Header =styled.div`
  
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #fff;
`
const HeaderText = styled.div`

    padding: 6px;
    color: #fff;
    font-size: 22px;
`

export default CheckInTicket