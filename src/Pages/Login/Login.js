import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const navigateSignUp = event => {
        navigate('/signup');
    }
  return (
    <div className="container w-50 mx-auto mt-5">
      <h2 className="text-center mt-2">Please Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button className='mb-3 w-100 mx-auto d-block' variant="dark" type="submit">
          Login
        </Button>
      </Form>
      
      <p>Don't Have An Account? <Link as={Link} to="/signup" className='text-black pe-auto text-decoration-none' onClick={navigateSignUp} >Please Sign Up Here</Link> </p>
      <p>Forget Password? <button className='btn btn-link text-black pe-auto text-decoration-none' >Reset Password</button></p>
      
    </div>
  );
};

export default Login;
