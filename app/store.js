import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import categoryReducer from "../slices/categorySlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    category: categoryReducer,
  },
});
