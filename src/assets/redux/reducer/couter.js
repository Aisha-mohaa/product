
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] // waxaa ku kaydsan waxyaabaha ku jira cart-ka
  },
  reducers: {
    addCart: (state, action) => {
      const newData = action.payload;
      state.items.push(newData);
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
