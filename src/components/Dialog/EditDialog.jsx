import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import postService from '../../services/postService';
import styled from 'styled-components';

function  EditDialog({data}) {


  const [user, setUser]= useState(data);

  const handleEdit = async (e) =>{ 
 await postService.postEditUserData(data.id, user.firstName,user.lastName,user.email,user.address,user.phone);
    }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
   };


  return (
    <DialogEdit>
 
    <Form onSubmit={handleEdit}>
  
    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledTextInput">First Name</Form.Label>
      <Form.Control id="disabledTextInput" name="firstName" defaultValue={data.firstName} onChange={handleInputChange}/>
    </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledTextInput">Last Name</Form.Label>
      <Form.Control id="disabledTextInput" name="lastName" defaultValue={data.lastName}   onChange={handleInputChange} />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label>Email</Form.Label>
         <Form.Control type="email" name="email" defaultValue={data.email}  onChange={handleInputChange} />
       </Form.Group>   
    <Form.Group className="mb-3">
      <Row className="mb-3">
       <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label>Address</Form.Label>
         <Form.Control type="text" name="address" defaultValue={data.address}  onChange={handleInputChange} />
       </Form.Group>
       <Form.Group as={Col} controlId="formGridPhone">
         <Form.Label>Phone</Form.Label>
         <Form.Control type="text" name="phone" defaultValue={data.phone}  onChange={handleInputChange} />
       </Form.Group>
     </Row>
       </Form.Group>
       <Button type="submit" >Save</Button>     
       
   </Form>
   
   </DialogEdit>
  )
}

const DialogEdit = styled.div`

      padding: 20px ;
`

export default EditDialog;