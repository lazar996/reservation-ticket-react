import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8080/api";


const getAllPublicPosts = () => {
  return axios.get(API_URL + "/all");
};

const getAllPrivatePosts = (id) => {

    const token = authHeader()["x-auth-token"];
    console.log(token)
    return axios.get(API_URL + "/user/"+id, { headers: {"Authorization" : `Bearer ${token}`} });
  
};

const postEditUserData = (id,firstName,lastName, email,address,phone)=>{
  const token = authHeader()["x-auth-token"];
  return axios
  
  .put(API_URL+"/user/edit/"+id,{
    id,
    firstName,
    lastName, 
    email,
    address,
    phone
  },{ headers: {"Authorization" : `Bearer ${token}`} })
  .then((response)=>{
    if(response.data.accessToken){
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
}



const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
  postEditUserData
 
};
export default postService;
