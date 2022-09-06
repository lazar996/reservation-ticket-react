import axios from "axios"



const API_URL= "http://localhost:8080/api/ticket"

const getAllTicket = () => {

    return axios.get(API_URL+"/all")
}

const reservationTicketService ={

    getAllTicket
}

export default reservationTicketService