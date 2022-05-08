import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(()=>{
        const url = `http://localhost:5000/products/${id}`;
        console.log(id);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
    
    
    return (
        <div>
            <h2>this is product detail {id}</h2>
        </div>
    );
};

export default ProductDetails;