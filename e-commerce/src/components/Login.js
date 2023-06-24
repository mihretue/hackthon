import React from "react";
import { useState } from "react";
const Login = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = (event) =>{
        event.preventDefault();
    }
    return(
        <div className="container"> 
           <Form onSubmit={handleSubmit}>
              <Form.Group conrolId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control type="email" placeholder ="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>
              <Button variant="primary">Submit</Button>
           </Form>
        </div>
    );
};
export default Login;