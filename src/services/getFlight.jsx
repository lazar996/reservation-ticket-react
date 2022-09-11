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

const getFlight ={

    currentFlight,
    getFlightByCode,
    getFlightById
    
}

export default getFlight