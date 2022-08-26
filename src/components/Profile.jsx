import React, { useState, useEffect } from "react";
import PostService from "../services/postService";
import AuthService from "../services/authService";

import styled from 'styled-components';
const Home = () => {

  const [userData, setUserData] = useState([]);



  useEffect(() => {
    const user = AuthService.getCurrentUser();
    
    PostService.getAllPrivatePosts(user.id).then(
      (response) => {
        
        setUserData(response.data);
      },
      (error) => {
    
        if (error.response && error.response.status === 403) {
          AuthService.logout();

          window.location.reload();
        }
      }
    );
  }, []);


  return (
    <Profil>
      <Data>
      <Text>Name:{userData.firstName}</Text>
      <p>a</p>
      <Text>godina{userData.age} </Text>

      </Data>
</Profil>
  )
};

const Data = styled.div`
    width: 600px;
    border: 1px solid #7e7c7c;
    border-radius: 5px;
    margin: auto;
    padding-top: 10px;

`

const Text = styled.div`
    display: inline-block;

`
const Profil = styled.div`
    background-color: #eff3f5;
    padding-top:50px;
    margin:auto;
    width: 70%;
    height: 900px;

`
export default Home;
