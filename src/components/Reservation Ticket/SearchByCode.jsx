import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";


function SearchByCode() {

    const [code, setCode] = useState([]);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
       navigate("/flight-list?code="+code);
    }
  return (
    <ReservationBlock>
        <Form onSubmit={handleSubmit}>
            <Outline>
                <Block>
                     <Form.Control placeholder='Code' onChange={(e)=> setCode(e.target.value)}/>
                </Block>
                <Block>
                    <BlockButton>
                        <Button type = "submit" variant="primary" >Search</Button>
                    </BlockButton>
                </Block>
          </Outline>
          
        </Form>
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

export default SearchByCode