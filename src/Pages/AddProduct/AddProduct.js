import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://young-shore-96623.herokuapp.com/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Product Added");
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto mt-5 ">
      <h2 className="text-center">Add New Product</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 250 })}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("picture")}
        />
        <input
          className="mb-2"
          placeholder="Supplier"
          type="text"
          {...register("supplier")}
        />
        <input
          className="mb-2"
          placeholder="Email"
          type="text"
          {...register("email")}
        />
        <input type="submit" value="Add Product" />
        
      </form>
      <Link to={'/products'}><button className="w-100 mt-2 btn btn-dark">Manage Inventories</button></Link>
    </div>
  );
};

export default AddProduct;
