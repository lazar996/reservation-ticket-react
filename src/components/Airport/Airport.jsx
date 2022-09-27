import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import getService from '../../services/getService';
function Airport() {

    const [airport, setAirport] = useState([]);

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
    <div>{airport.map((airportName)=> 
        <li key={airportName.id}>{airportName.id}</li>)}</div>
  )
}

export default Airport