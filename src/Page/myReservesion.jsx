import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import AuthService from "../services/authService";
import Table from 'react-bootstrap/Table';
import ReservationService from "../services/reservationService"
function MyReservesion() {

  const user = AuthService.getCurrentUser();
  const [myReservesion, setMyReservesion ]= useState([]);

  const getFormattedDate2 = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString();
  }
  useEffect(()=> {

  ReservationService.getAllPrivateReservation(user.id).then(
    (response)=> {

      setMyReservesion(response.data);
    
    },
    (error)=> {
      console.log(error);
    }
  )
},[])

console.log(myReservesion)
  return (
     <Container>
          <Table striped bordered hover size="sm">
    <Thead>
      <tr>
 
        <th>Number Ticket</th>
        <th>Departure</th>
        <th>Estimated Time Of Arrival</th>
        <th>Origin</th>
        <th>Destination</th>
        <th>CheckIn</th>
      </tr>
    </Thead>
    <tbody>
        
        
     
        {myReservesion.map((reservesion)=>
         <tr key={reservesion.id}><td>{reservesion.numberTicket}</td>
         <td>{getFormattedDate2(reservesion.flight.departureDate)}</td>
         <td>{getFormattedDate2(reservesion.flight.departureDate)}</td>
         
         <td>{reservesion.flight.route.departureAirport.name}</td>
         <td>{reservesion.flight.route.arrivalAirport.name}</td>
         <td>{reservesion.checkIn}</td>
         </tr>)}
        

    
      
    </tbody>
  </Table>
     </Container>
  )
}


const Container = styled.div`

    width: 60% ;
    height: 600px;
    margin: 0 auto ;

`

const Thead = styled.thead`

    background-color: #094981; 
    color: #fff;
`
export default MyReservesion