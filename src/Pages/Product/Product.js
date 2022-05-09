import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, picture, price, name, quantity, description, supplier } =
    product;
    console.log(product);

  const [products, setProducts] = useState([]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");

    if (proceed) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div className="col-md-4">
      <div className="card shadow-sm card-style">
        <img className="card-img-top" src={picture} alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Quantity: {quantity}</p>
          <p className="card-text">Supplier Name: {supplier}</p>
          <h6>Price: ${price}</h6>
          <Link to={`/products/${_id}`}>
            <button className="btn btn-dark">Stock Update</button>
          </Link>
          <button
            className="btn btn-dark ms-3"
            onClick={() => handleDelete(product._id)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>

    // <div className="container">
    //   <Card style={{ width: "20rem" }}>
    //     <Card.Img variant="top" src={picture} />
    //     <Card.Body>
    //       <Card.Title>{name}</Card.Title>
    //       <Card.Text>Price: ${price}</Card.Text>
    //       <Card.Text>Quantity: {quantity}</Card.Text>
    //       <Card.Text>{description}</Card.Text>
    //       <Card.Text>Supplier: {supplierName}</Card.Text>
    //       <div className="d-flex justify-content-between">
    //         <Link to={`/products/${_id}`}>
    //           <button className='btn btn-dark'>Stock Update</button>
    //         </Link>
    //         <button className='btn btn-dark' onClick={()=> handleDelete(product._id)}>Delete Item</button>
    //       </div>
    //     </Card.Body>
    //   </Card>
    // </div>
  );
};

export default Product;
