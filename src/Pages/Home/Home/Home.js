import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomePageProducts from "../../HomePageProducts/HomePageProducts";
import Banner from "../Banner/Banner";
import Banner2 from "./Banner2/Banner2";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="bg-dark">
      <Banner></Banner>
      <div className="container mt-3">
        <div className=" row text-center mt-5 g-4 d-flex justify-content-center align-items-center">
          {products.slice(0, 6).map((product) => (
            <HomePageProducts
              key={product._id}
              product={product}
            ></HomePageProducts>
          ))}
        </div>
      </div>
      <div className=" d-flex justify-content-center m-5">
        <Link to={"/products"}>
          <button className=" btn btn-dark">Manage Inventories</button>
        </Link>
      </div>
      <Banner2></Banner2>
    </div>
  );
};

export default Home;
