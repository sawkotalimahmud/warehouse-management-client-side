import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, picture, price, name, quantity, description, supplierName } =
    product;

  return (
    <div className="container">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: ${price}</Card.Text>
          <Card.Text>Quantity: {quantity}</Card.Text>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>Supplier: {supplierName}</Card.Text>
          <Link to={`/products/${_id}`}><button>Stock Update</button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
