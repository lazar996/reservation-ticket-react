import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import AuthService from "../services/authService";
import Table from 'react-bootstrap/Table';
import ReservationService from "../services/reservationService"
function MyReservesion() {

  const user = AuthService.getCurrentUser();
  const [myReservesion, setMyReservesion ]= useState([]);

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
 
        <th>Code</th>
        <th>Departure</th>
        <th>Estimated Time Of Arrival</th>
        <th>Origin</th>
        <th>Destination</th>
      </tr>
    </Thead>
    <tbody>
        
        
     
        {myReservesion.map((reservesion)=>
         <tr key={reservesion.id}><td>{reservesion.flight.route.arrivalAirport.city}</td>
         <td></td>
         <td></td>
         
         <td></td>
         <td></td>
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