import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishItems: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const added = state.wishItems.find(
        (item) => item.id === action.payload.id
      );
      if (added) state.wishItems = [...state.wishItems];
      else state.wishItems = [...state.wishItems, action.payload];
    },
    removeFromWishlist: (state, action) => {
      state.wishItems = state.wishItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectWishItems = (state) => state.wishlist.wishItems;

export default wishlistSlice.reducer;
