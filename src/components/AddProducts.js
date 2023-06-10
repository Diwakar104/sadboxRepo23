import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../action/productAction";

const AddProducts = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const product = {
      id,
      title: title,
      description: description,
      price: price
    };
    console.log("new products");
    dispatch(addProducts(product));
    setTitle("");
    setDescription("");
    setPrice("");
  };
  return (
    <div>
      <h2>Add Product in List</h2>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};
export default AddProducts;
