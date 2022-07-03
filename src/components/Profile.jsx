import React, { useState, useEffect } from "react";
import PostService from "../services/postService";
import AuthService from "../services/authService";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [privatePosts, setPrivatePosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    PostService.getAllPrivatePosts().then(
      (response) => {
        setPrivatePosts(response.data);
      },
      (error) => {
    
        if (error.response && error.response.status === 403) {
          AuthService.logout();
          navigate("/login");
          window.location.reload();
        }
      }
    );
    // eslint-disable-next-line 
  }, []);


  return (
    <div>

   {privatePosts.map((user)=> {
    return (
    <div key={user.id}>
      <ul>
      <li >{user.username}</li>
      <li >{user.firstName}</li>
      </ul>
        </div>
  );
})}

</div>
  )
};

export default Home;
