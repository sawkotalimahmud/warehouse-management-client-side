import React, { useState } from 'react';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, picture, price, name, quantity, description, supplierName } =
    product;

    const [products, setProducts] = useState([]);
    const handleDelete = id => {
      const proceed = window.confirm('Are You Sure?')

      if (proceed){
          const url = `http://localhost:5000/products/${_id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              const remaining = products.filter(product => product._id !== id);
              setProducts(remaining);
          });
      }
  }
    

  return (
    <div className="container">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: ${price}</Card.Text>
          <Card.Text>Quantity: {quantity}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Supplier: {supplierName}</Card.Text>
          <div className="d-flex justify-content-between">
            <Link to={`/products/${_id}`}>
              <button>Stock Update</button>
            </Link>
            <button onClick={()=> handleDelete(product._id)}>Delete Item</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
