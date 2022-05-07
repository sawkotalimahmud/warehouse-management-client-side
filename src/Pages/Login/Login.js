import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-black text-center mt-2">Please Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button className='mb-3 w-100 mx-auto d-block' variant="primary" type="submit">
          Login
        </Button>
      </Form>
      
      <p>Don't Have An Account? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register Here</Link> </p>
      <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Password</button></p>
      
    </div>
  );
};

export default Login;
