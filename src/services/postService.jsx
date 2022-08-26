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

const postService = {
  getAllPublicPosts,
  getAllPrivatePosts
 
};
export default postService;
