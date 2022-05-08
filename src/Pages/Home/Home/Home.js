import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const newProduct = products.slice(0,6);
    console.log(newProduct);
    
    return (
        <div>
            <Banner></Banner>
            
            
        </div>
    );
};

export default Home;