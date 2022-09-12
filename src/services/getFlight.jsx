import axios from "axios"


const API_URL = "http://localhost:8080/api/flight"


const currentFlight = () => {

    return axios.get(API_URL+ "/all")
}

const getFlightById =(id) =>{

    return axios.get(API_URL+"/"+id)
}

const getFlightByCode =(code)=>{

    return axios.get(API_URL+"/by-code/"+code)
}

const getFlightByDateAndAirPort =(date,origin,destination)=>{

    return axios.get(API_URL+"/all/departure-data?start="+date+" 00:00:00&end="+date+" 23:59:00"+"&origin="+origin+"&destination="+destination)
}

const getFlightByDateAndAirPortReturn =(date,origin,destination)=>{

    return axios.get(API_URL+"/all/departure-data-return?start="+date+" 00:00:00&end="+date+" 23:59:00"+"&origin="+destination+"&destination="+origin)
}

const getFlight ={

    currentFlight,
    getFlightByCode,
    getFlightById,
    getFlightByDateAndAirPort,
    getFlightByDateAndAirPortReturn
    
}

export default getFlight