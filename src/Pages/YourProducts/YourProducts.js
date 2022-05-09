import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const YourProducts = () => {
    const [user] = useAuthState(auth)
    const [yourProducts, setYourProducts] = useState([]);

    console.log(yourProducts);
    useEffect(()=>{
        const getYourProducts = async () => {
            const email = user?.email
            console.log(email);
            const url= `https://young-shore-96623.herokuapp.com/yourproducts?email=${email}`
            const {data} = await axios.get(url)
            setYourProducts(data)
        }
        getYourProducts();
    },[user])
    return (
        <div>
            <h2>your products {yourProducts.length}</h2>
        </div>
    );
};

export default YourProducts;