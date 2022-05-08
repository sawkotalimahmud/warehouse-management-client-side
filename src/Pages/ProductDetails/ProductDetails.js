import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const [quantity, setQuantity] = useState(30);
  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="d-flex justify-content-center m-3">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={product.picture} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: ${product.price}</Card.Text>
          <Card.Text>Quantity: {quantity}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Supplier: {product.supplierName}</Card.Text>
          <div>
            <button className="w-100 mb-2" onClick={handleDecrement}>Delivered</button>
          </div>
          <div>
              <input className="w-50" type="number" />
              <button className="w-50">Add Item</button>
            </div>
            <Link to={'/products'}><button className="w-100 mt-2">Manage Inventories</button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;
