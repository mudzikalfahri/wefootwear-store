import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import categoryReducer from "../slices/categorySlice";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    category: categoryReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});
