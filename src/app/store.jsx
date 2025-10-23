import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice"; // ✅ FIXED
import cartReducer from "../slices/cartSlice"

const store = configureStore({
  reducer: {
    userData: userReducer, // ✅ FIXED
    cartData: cartReducer
  },
});

export default store;
