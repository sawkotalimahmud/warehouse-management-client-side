import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

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
           <div className='product-container mt-3'>
           {
                products.map(product => <Product
                key={product._id}
                product={product}
                ></Product>)
            }
           </div>
        </div>
    );
};

export default Products;