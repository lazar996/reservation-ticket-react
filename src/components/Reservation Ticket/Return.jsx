import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import getService from '../../services/getService';
import { Typeahead } from 'react-bootstrap-typeahead';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function Return() {
    const [airport, setAirport] = useState([]);
    const [date, setDate] = useState(new Date());
    const [dateReturn, setDateReturn] = useState(new Date());
 
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


    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(date,dateReturn,selectedTo,selectedFrom)
        navigate("/search-by-return?start="+date+"&origin="+selectedFrom+"&destination="+selectedTo+"&return="+dateReturn);
       
    }

  return (
  <Wrapp>
   
  

       <ReservationBlock>
       <Form onSubmit={handleSubmit}>
  <Outline>
    <Block>
    <Typeahead
            id="basic-example"
            onChange={setSelectedFrom}
            options= {airport.map((airportName)=>  airportName.city)}
            placeholder="Origin"
            selected={selectedFrom}/>

    </Block>
    <Block>
    <Typeahead
            id="basic-example"
            onChange={setSelectedTo}
            options= {airport.map((airportName)=>  airportName.city)}
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
        <Form.Control
            type="date"
            name="datepicReturn"
            placeholder="DateRange"
            value={dateReturn}
            onChange={(e) => setDateReturn(e.target.value)}
            
          /></Block>

          <Block>
          <BlockButton>
          <Button variant="primary" type="submit">Search</Button>
          </BlockButton>
         
          </Block>
          </Outline>
          
       </Form>
</ReservationBlock>

</Wrapp>

  )
}
const Wrapp = styled.div`

    display:inline ;
    
`





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
export default Return