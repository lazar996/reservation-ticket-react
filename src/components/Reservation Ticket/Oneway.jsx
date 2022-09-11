import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import getService from '../../services/getService';
import { Typeahead } from 'react-bootstrap-typeahead';
import Button from 'react-bootstrap/Button';
function Oneway() {

    const [airport, setAirport] = useState([]);
    const [date, setDate] = useState(new Date());

 
    const [selectedFrom, setSelectedFrom] = useState([]);
    const [selectedTo, setSelectedTo] = useState([]);
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
  <Outline>
    <Block>
    <Typeahead
            id="basic-example"
            onChange={setSelectedFrom}
            options= {airport.map((airportName)=>  airportName.name)}
            placeholder="Origin"
            selected={selectedFrom}/>

    </Block>

    <Block>
    <Typeahead
            id="basic-exampl"
            onChange={setSelectedTo}
            options= {airport.map((airportName)=>  airportName.name)}
            placeholder="Destination"
            selected={selectedTo}/>

    </Block>
    <Block>
        <Form.Control
            type="date"
            name="datepic"
            placeholder="DateRange"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            
          /></Block>

          <Block>
          <BlockButton>
          <Button variant="primary">Search</Button>
          </BlockButton>
          </Block>
          </Outline>
          
       
</ReservationBlock>



  )
}




const Outline = styled.div`

  width: 850px ;
  border: 1px solid #fff;
  display: flex;
`



const Block = styled.div`
    
    padding: 20px ;


`
const BlockButton = styled.div`

  
    border: 1px solid #fff ;
    background-color: #fff ;
    margin:0 auto ;
`
const ReservationBlock = styled.div`

    
    width: 900px;
    height: 150px ;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0 auto ;
    background-color:#094981;
    border-top: 1px solid #fff ;
    
`

export default Oneway