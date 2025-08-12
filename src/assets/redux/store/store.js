import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/couter"
export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});
