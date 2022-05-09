import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div>
            <div className=" d-flex justify-content-center m-5">
            <Link to={'/addproduct'}><button className='btn btn-dark'>Add New Product</button></Link>
            </div>
           <div className='container mt-3'>
           <div className='row text-center g-4 d-flex justify-content-center align-items-center '>
           {
                products.map(product => <Product
                key={product._id}
                product={product}
                ></Product>)
            }
           </div>
           </div>
        </div>
    );
};

export default Products;