import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./product";
import cartReducer from "./cart";
import { authReducer } from "./auth";
export const rootreducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  auth: authReducer,
});
