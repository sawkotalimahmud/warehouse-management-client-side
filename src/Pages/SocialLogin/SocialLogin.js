import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate =useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    
    if(user){
        navigate(from, { replace: true });
    }
    return (
        <div className='mb-5'>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-black w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-black w-50'></div>
            </div>
            <div>
            <button onClick={()=>signInWithGoogle()} className='btn btn-dark w-100 d-block mx-auto my-3'>
                    <img style={{width:'30px'}} src='https://i.ibb.co/yFT9RGc/Google.png' alt=''/>
                    <span className='px-2'>Google Sign In</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;