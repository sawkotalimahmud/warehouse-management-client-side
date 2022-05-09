import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState(id);
  const {picture, price, name, quantity, description, supplier} = inventory

  useEffect(() => {
    const url = `https://young-shore-96623.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id]);

  
  const handleDecrement = () => {
    let remaing = parseInt(+inventory.quantity) -1
    let newRemaing = {picture, price, name, quantity:remaing, description, supplier};
    setInventory(newRemaing)
    fetch(`https://young-shore-96623.herokuapp.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(newRemaing),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const addQuantity = (event) => {
    event.preventDefault()
    let remaing = parseInt(+inventory.quantity) + parseInt(event.target.number.value)
    let newRemaing = {picture, price, name, quantity:remaing, description, supplier};
    setInventory(newRemaing)
    fetch(`https://young-shore-96623.herokuapp.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(newRemaing),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
      event.target.reset();
  }

  return (
    <div className="d-flex justify-content-center m-3 ">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: ${price}</Card.Text>
          <Card.Text>Quantity: {quantity}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Supplier: {supplier}</Card.Text>
          <div>
            <button className="w-100 mb-2 btn btn-dark" onClick={handleDecrement}>Delivered</button>
          </div>
          <div className="d-grid gap-3">
            <form onSubmit={addQuantity}>
            <input className="w-100" type="number" name='number' />
              <button type='submit' className="w-100 btn btn-dark">Add Item</button>
            </form>
            </div>
            <Link to={'/products'}><button className="w-100 mt-2 btn btn-dark">Manage Inventories</button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;
