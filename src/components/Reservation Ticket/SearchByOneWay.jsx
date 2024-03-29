import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import getFlight from '../../services/getFlight';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DialogDetailsFlight from '../Dialog/DialogDetailsFlight';
function SearchByOneWay() {

    const value=new URLSearchParams(window.location.search);
    const start=value.get("start")
    const origin=value.get("origin")
    const destination=value.get("destination")

    const [flight, setFlight] = useState([]);
    const [flightData, setFlightData] = useState([])
    const id = flight.id;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const getFormattedDate2 = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleString();
      }
   useEffect(()=>{

    getFlight.getFlightByDateAndAirPort(start,origin,destination ).then(
      (response)=>{

        setFlight(response.data);
       
      }, (error) =>{

        console.log(error)
      }
    )
   },[start]);
  return (


    <Container>
        <Wrapp>
    <Table striped bordered hover size="sm">
    <Thead>
      <tr>
 
        <th>Code</th>
        <th>Departure</th>
        <th>Estimated Time Of Arrival</th>
        <th>Origin</th>
        <th>Destination</th>
        
        <th>Reserve</th>
      </tr>
    </Thead>
    <tbody>
        
        
     
        {flight.map((flightData)=>
         <tr key={flightData.id}><td>{flightData.code}</td>
         <td>{flightData.price}</td>
         <td>{getFormattedDate2(flightData.departureDate)}</td>
         <td>{flightData.route.arrivalAirport.city}</td>
         <td>{flightData.route.departureAirport.city}</td>
         
         <td><Button onClick={handleShow}>Details</Button></td>
         <Modal       size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose}>
         <DialogDetailsFlight  data= {id}/>
            </Modal>  
         </tr>)}
      
      
    </tbody>

    </Table>
    </Wrapp>
   </Container>
  )
}

const Container = styled.div`
background-image: url("https://image.cnbcfm.com/api/v1/image/106992130-1640090639500-gettyimages-1359982785-img_8658.jpeg?v=1640091082&w=1920&h=1080") ;
`

const Wrapp = styled.div`

    width: 900px ;
    padding-top: 20px ;
    margin: 0 auto ;
    height:800px ;
`

const Thead = styled.thead`

    background-color: #094981; 
    color: #fff;
`
export default SearchByOneWay