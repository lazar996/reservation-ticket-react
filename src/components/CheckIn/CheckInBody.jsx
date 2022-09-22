import React from 'react'
import styled from 'styled-components'
import { Typeahead } from 'react-bootstrap-typeahead';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import getService from '../../services/getService';
import { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function CheckInBody() {

    const [airport, setAirport] = useState([]);
    const [selectedFrom, setSelectedFrom] = useState([]);
    
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

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
   navigate("/search-by-one-way?origin="+selectedFrom+"&code="+"&lastName");
}

  console.log(airport+"ovo je")
  return (
    <Container>
         <Form onSubmit={handleSubmit}>
    <Outline>

    <Block>
    <Typeahead
            id="basic-example"
            onChange={setSelectedFrom}
            options= {airport.map((airportName)=>  airportName.city)}
            placeholder="Origin"
            selected={selectedFrom}
            />

    </Block>


      <Block>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Enter code" />
      
      </Form.Group>
  
      </Block>
  
      <Block>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter Last Name" />
    
      </Form.Group>
  
      </Block>
    
            <Block>
            <BlockButton>
            <Button variant="primary" type="submit">Check In</Button>
            </BlockButton>
            </Block>
            </Outline>
            
            </Form></Container>
  )
}


const Container = styled.div`

    width: 950px;
    height: 140px ;
    background-color:#094981; 
    display: flexbox;
    justify-content: center;
    margin:0 auto ;
    padding-top: 20px;
`

const Outline = styled.div`
padding-top: 5px;
  width: 900px ;
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
export default CheckInBody