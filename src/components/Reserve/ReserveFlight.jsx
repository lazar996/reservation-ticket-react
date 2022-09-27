import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import AuthService from '../../services/authService'
import getFlight from '../../services/getFlight'
import postService from '../../services/postService'
import TicketService from '../../services/TicketService'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsFillInfoCircleFill ,BsFillCheckCircleFill} from "react-icons/bs";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'
import reservationService from '../../services/reservationService'
function ReserveFlight() {


  const value=new URLSearchParams(window.location.search);
  const code=value.get("code")

  const [user, setUser]= useState("")
  const [ticket, setTicket] = useState("")
  const [flight, setFlight] = useState("")
  const [arrivalAirport, SetArrivalAirport] = useState("")
  const [departureAirport, SetDepartureAirport] = useState("");
useEffect(()=>{

  const userData = AuthService.getCurrentUser();
  
  postService.getAllPrivatePosts(userData.id).then(
    (response) => {
      setUser(response.data);
    },
    (error) => {
      if (error.response && error.response.status === 403) {
        AuthService.logout();
        
      }
    }
  );

  getFlight.getFlightByCode(code).then(
    (response) => {
      setFlight(response.data);
      SetArrivalAirport(response.data.route.arrivalAirport);
      SetDepartureAirport(response.data.route.departureAirport);
    },
    (error)=> {
      console.log(error)
    }
  )

}, []);

const getFormattedDate2 = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleString();
}
const numberTicket = 25;
const navigate = useNavigate();
const handleEdit = async (e) =>{ 
  e.preventDefault();
  try {
    await reservationService.reservationTicket(user.id, flight.id, ticket.checkIn, numberTicket).then(
      (response) => {
        navigate("/home");
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
console.log(user)
  return (
    <Container>
    
    <Wrapp>
    <Form onSubmit={handleEdit}>
            <Header><HeaderText><BsFillCheckCircleFill/>   Your Destination</HeaderText></Header>
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
      <Button type='submit'>Reserve your ticket now</Button>
      <p>*vaša karta će biti poslata na mail adresu</p>
    </CheckTicket>
    </Form>
    </Wrapp>
    </Container>
    
    
  )
}

const HeaderUserPanel= styled.div`
  
  width: 900px;
  height: 50px;
  background-color: #094981;
`
const CheckTicket= styled.div`
  height: 200px;
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

const UserInfo = styled.div`
  
    width: 900px;
    color: #094981;
    background-color: #e9e9e9;
    padding: 10px;
    font-size: 20px;
`

const BodyText = styled.div`
  
    width: 100%;
    color: #fff;
    padding: 10px;
    font-size: 20px;
`

const Body = styled.div`
    width: 100%;
    height: 100px;
    background-color: #094981;
`
const HeaderText= styled.div`
    color: #fff;
    font-size: 20px;
    padding: 5px;
    border-bottom: 1px solid #fff;
`
const Header = styled.div`
    width: 900px;
    height: 50px;
    background-color: #094981;
`
const Wrapp = styled.div`

    width: 900px ;
    height: 200px ;
    
    margin: 0 auto ;
    padding-top: 10px;


`

const Container = styled.div`

   
    width: 850px ;
    height: 800px ;
    background-color: #fff ;
    margin: 0 auto ;
    border-radius: 5px ;
`
export default ReserveFlight