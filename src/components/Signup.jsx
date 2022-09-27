import React, { useState } from "react";
import AuthService from "../services/authService";
import { useNavigate } from "react-router-dom";
import { Group } from "antd/lib/avatar";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("")
 
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(firstName,lastName, username, email,address,phone, password).then(
        (response) => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
    <div className="Auth-form-container-signup">
      <form onSubmit={handleSignup} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>

          <Group>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              required
              className="form-control mt-1"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              required
              className="form-control mt-1"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          </Group>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              required
              className="form-control mt-1"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              required
              className="form-control mt-1"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="Password"
              required
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        <Group>
          <div className="form-group mt-3">
            <label>Phone</label>
            <input
              type="Phone"
              required
              className="form-control mt-1"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label>Address</label>
            <input
              type="text"
              required
              className="form-control mt-1"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          </Group>
 
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>

    
  );
};

export default Signup;
