import axios from "axios";


const API_URL = "http://localhost:8080/api/ticket";

const getCheckIn = (email, numberTicket,lastName) =>{

    return axios.get(API_URL+"/checkInView?email="+email+"&numberTicket="+numberTicket+"&lastName="+lastName)
}

const postCheckInCart =(id)=>{
    console.log(id)
    return axios.put(API_URL+"/checkIn/"+id)
}


const TicketService={

    getCheckIn,
    postCheckInCart
}

export default TicketService