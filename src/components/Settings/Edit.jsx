import React, { useState, useEffect } from "react";
import PostService from "../../services/postService";
import AuthService from "../../services/authService";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import EditDialog from '../../components/Dialog/EditDialog';
function Edit() {

  const [userData, setUserData] = useState([]);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {

    const user = AuthService.getCurrentUser();
    
    PostService.getAllPrivatePosts(user.id).then(
      (response) => {
        setUserData(response.data);
      },
      (error) => {
        if (error.response && error.response.status === 403) {
          AuthService.logout();
          
        }
      }
    );
  }, []);



  return (
    <Profil>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label >First Name</Form.Label>
          <Form.Control  defaultValue={userData.firstName}/>
        </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Last Name</Form.Label>
          <Form.Control defaultValue={userData.lastName} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
             <Form.Label>Email</Form.Label>
             <Form.Control type="email" defaultValue={userData.email}  />
           </Form.Group>   
        <Form.Group className="mb-3">
          <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridAddress">
             <Form.Label>Address</Form.Label>
             <Form.Control type="text" defaultValue={userData.address}/>
           </Form.Group>
           <Form.Group as={Col} controlId="formGridPhone">
             <Form.Label>Phone</Form.Label>
             <Form.Control type="text" defaultValue={userData.phone} />
           </Form.Group>
         </Row>
           </Form.Group>
           <Button onClick={handleShow} >Edit</Button>  
           <Modal  show={show} onHide={handleClose}>
            <EditDialog  data= {userData}/>
            </Modal>   
       </Form>
       </Profil>
     )
   };
   
   const Profil = styled.div`
     
       padding-top:50px;
       margin:auto;
       width: 500px;
       height: 900px;
   
   `

export default Edit