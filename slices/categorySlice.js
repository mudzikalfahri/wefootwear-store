import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { selectCategory } = categorySlice.actions;

export const recentCategory = (state) => state.category.item;

export default categorySlice.reducer;
