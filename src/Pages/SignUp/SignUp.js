import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login');
    }
    return (
        <div className="container w-50 mx-auto mt-5">
            <h2 className="text-center mt-2">Please Sign Up Here</h2>
            <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="name" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" placeholder='Password' required/>
        <label className={agree?'ps-2 text-black':'ps-2 text-danger'} htmlFor='terms'>Accept Terms And Condition</label>
        <Button className='mb-3 mt-3 w-100 mx-auto d-block' variant="dark" type="submit">
          Sign Up
        </Button>
      </Form>
      <p>Already have an account? <Link to="/login" className='text-black pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default SignUp;