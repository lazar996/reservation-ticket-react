import axios from "axios"
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/api/user/";

const getCurrentUser = () => {
    const token = authHeader()["x-auth-token"];
    console.log(token)
    return axios.get(API_URL + 1 +  { headers: {"Authorization" : `Bearer ${token}`} })


}

const getService ={

    getCurrentUser
}
export default getService