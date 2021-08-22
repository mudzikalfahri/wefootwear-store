import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import categoryReducer from "../slices/categorySlice";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    category: categoryReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});
