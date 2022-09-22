import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import getFlight from '../../services/getFlight';
function CurrentFlight() {


    const [currentFlight , setCurrentFlight] = useState([]);
   
    const getFormattedDate2 = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleString();
      }
   
    useEffect(()=> {

    getFlight.currentFlight().then(
        (response)=> {

            setCurrentFlight(response.data);
        },
        (error)=> {
            console.log(error);
        }
    )
})

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
        
        
     
        {currentFlight.map((flight)=>
         <tr key={flight.id}><td>{flight.code}</td>
         <td>{flight.price}</td>
         <td>{getFormattedDate2(flight.departureDate)}</td>
         
         <td>{flight.route.departureAirport.name}</td>
         <td>{flight.route.arrivalAirport.name}</td>
         </tr>)}
        

    
      
    </tbody>
  </Table>
  </Container>
  )
}

const Container = styled.div`


`
const Thead = styled.thead`

    background-color: #094981; 
    color: #fff;
`
export default CurrentFlight