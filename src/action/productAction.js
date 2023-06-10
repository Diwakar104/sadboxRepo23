export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

//CREATE ACTION HERE
export const getProductsDetails = (products) => ({
  type: GET_PRODUCTS,
  payload: products
});

export const addProducts = (products) => ({
  type: ADD_PRODUCT,
  payload: { products }
});

export const deleteProducts = (products) => ({
  type: DELETE_PRODUCT,
  payload: products
});

export const updateProducts = (products) => ({
  type: UPDATE_PRODUCT,
  payload: products
});
