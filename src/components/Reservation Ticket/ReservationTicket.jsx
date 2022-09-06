
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import reservationTicketService from '../../services/reservationTicketService';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import getService from '../../services/getService';
function ReservationTicket() {


    const [airport, setAirport] = useState([]);
    const [date, setDate] = useState(new Date());
    useEffect(()=> {

        getService.getAllAirport().then(
            (response)=>{
    
                setAirport(response.data);
            },
            (error)=> {
                console.log(error);
            }
        )
    },[]);

   

  return (
    <ReservationBlock>
        <Block>
        <Form.Select aria-label="Default select example">
      <option>From</option>
      {airport.map((airportName)=> <option key={airportName.id}>{airportName.name}</option>)}
    </Form.Select>
        </Block>
        <Block>
        <Form.Select aria-label="Default select example">
      <option>To</option>
      {airport.map((airportName)=> <option key={airportName.id}>{airportName.name}</option>)}
    </Form.Select>

    
        </Block>
        <Block>
            <label>Departure</label>
            <Form.Control
                type="date"
                name="datepic"
                placeholder="DateRange"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              /></Block>
        <Block>
            <label>Return</label>
            <Form.Control
                type="date"
                name="datepic"
                placeholder="DateRange"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              /></Block>
      
    
  </ReservationBlock>
  )
}

const Block = styled.div`
    
    padding: 50px ;
`
const ReservationBlock = styled.div`

    width: 900px;
    height: 300px ;
    border: 1px solid black ;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0 auto ;
    
`

export default ReservationTicket