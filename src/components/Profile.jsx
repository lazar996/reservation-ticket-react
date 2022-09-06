import React, { useState, useEffect } from "react";
import PostService from "../services/postService";
import AuthService from "../services/authService";

import styled from 'styled-components';
const Home = () => {

  const [userData, setUserData] = useState([]);



  useEffect(() => {

    const user = AuthService.getCurrentUser();

    console.log(user)

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
    <Photo>
      {userData.username}
    </Photo>
      <Data>
 
      </Data>
</Profil>


  )
};

const Photo = styled.div`

    width:100%;
    height:250px;
    background: #7e7c7c ;
   
`

const Data = styled.div`
    width: 400px;
    border: 1px solid #7e7c7c;
    border-radius: 5px;
    margin: auto;
    padding-top: 10px;

`


const Profil = styled.div`
    background-color: #eff3f5;

    margin:auto;

    height: 900px;

`
export default Home;
