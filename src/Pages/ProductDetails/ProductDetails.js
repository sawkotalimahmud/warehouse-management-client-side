import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const [quantity, setQuantity] = useState(1)
  const handleDecrement = () => {
      setQuantity(quantity - 1)
      console.log(quantity);
    
  }
  
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={product.picture} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: ${product.price}</Card.Text>
          <Card.Text>Quantity: {quantity}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Supplier: {product.supplierName}</Card.Text>
          <button onClick={handleDecrement}>Delivered</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;
