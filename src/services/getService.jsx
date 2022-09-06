import axios from "axios"
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/api/airport";

const getCurrentUser = () => {
    const token = authHeader()["x-auth-token"];
    console.log(token)
    return axios.get(API_URL + 1 +  { headers: {"Authorization" : `Bearer ${token}`} })


}

const getAllAirport =()=>{

    return axios.get(API_URL+"/all")
}

const getService ={

    getCurrentUser,
    getAllAirport
}
export default getService