import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetails, deleteProducts } from "../action/productAction";

const ProductListDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch(getProductsDetails(data));
      });
  }, [dispatch]);

  useEffect(() => {}, [products]);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProducts(id));
  };
  return (
    <div>
      <h2>Products List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.products?.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.thumbnails} alt={product.title} />
              </td>
              <td>
                <button onClick={() => handleDeleteProduct(product.id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductListDetails;
