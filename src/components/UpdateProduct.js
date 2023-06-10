import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProducts } from "../action/productAction";

const UpdateProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateProductList = {
      ...product,
      title: title,
      description: description,
      price: price
    };
    dispatch(updateProducts(updateProductList));
  };
  return (
    <div>
      <h2>Update Product in List</h2>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
export default UpdateProduct;
