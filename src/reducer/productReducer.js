import {
  GET_PRODUCTS,
  UPDATE_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT
} from "../action/productAction";
import { initialState } from "../state/initialState";

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products.products, action.payload]
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products?.products?.map((item) =>
          item.title === action.payload.title ? action.payload : item
        )
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products?.products?.filter(
          (item) => item.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export default productReducer;
