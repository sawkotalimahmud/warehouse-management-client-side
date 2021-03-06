import React from "react";
import { Link } from "react-router-dom";

const HomePageProducts = ({ product }) => {
  const { _id, picture, price, name, quantity, description, supplier } =
    product;
  return (
    <div className="col-md-4 ">
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
        </div>
      </div>
    </div>
  );
};

export default HomePageProducts;
