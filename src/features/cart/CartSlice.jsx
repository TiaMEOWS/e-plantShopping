import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartItems: [] },
  reducers: {
    addItem: (state, action) => {
      const item = state.cartItems.find(i => i.name === action.payload.name);
      if (item) item.quantity++;
      else state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.cartItems.find(i => i.name === name);
      if (item) item.quantity = quantity;
    },
  },
});
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;