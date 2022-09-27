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

    const [email, setEmail] = useState([]);
    const [numberTicket, setNumberTicket]= useState([])
    const [lastName, setLastName]= useState([])
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
  
   navigate("/search-by-ticket?email="+email+"&numberTicket="+numberTicket+"&lastName="+lastName);
}

  return (
    <Container>
         <Form onSubmit={handleSubmit}>
    <Outline>
    <Block>
      <Form.Group className="mb-3" >
        <Form.Control type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Your Mail" required />
      </Form.Group>
      </Block>

      <Block>
      <Form.Group className="mb-3" >
        <Form.Control type="text" onChange={(e)=> setNumberTicket(e.target.value)} placeholder="Enter Number Ticket" required />
      </Form.Group>
      </Block>
      <Block>
      <Form.Group className="mb-3">
        <Form.Control type="text"  onChange={(e)=> setLastName(e.target.value)} placeholder="Enter Last Name" required />
      </Form.Group>
      </Block>
            <Block>
            <BlockButton>
            <Button variant="primary"   type="submit">Check In</Button>
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