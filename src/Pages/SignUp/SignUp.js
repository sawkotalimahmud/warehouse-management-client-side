import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Sheard/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  
    if(loading || updating){
      <Loading></Loading>
    }
    let errorElement;
    if (error) {
      errorElement = (
        <div>
          <p className="text-red-500">Error: {error?.message}</p>
        </div>
      );
    }
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
  
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      navigate("/");
  
      console.log(email, password);
    };
  
    if (user) {
      console.log('user',user);
    }
  
    const navigateLogin = (event) => {
      navigate("/login");
    };
  return (
    <div className="container w-50 mx-auto mt-5">
      <h2 className="text-center mt-2">Please Sign Up Here</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control ref={nameRef} type="text" name="name" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control ref={emailRef} type="email" name="email" placeholder="Email" required />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control ref={passwordRef} type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" placeholder='Password' required/>
                <label className={agree?'ps-2 text-black':'ps-2 text-danger'} htmlFor='terms'>Accept Terms And Condition</label>
                
                <input disabled={!agree} className='w-100 mx-auto d-block btn btn-dark mt-3 mb-2' type="submit" value="Register" />
      </Form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-black pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>{" "}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
