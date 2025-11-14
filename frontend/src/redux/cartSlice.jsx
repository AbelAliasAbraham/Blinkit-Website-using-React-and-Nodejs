import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...item, quantity: 1 });
      state.total += item.price;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        state.total -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== id);
      }
    },
    clearCart: (state) => { // New reducer for COD checkout
        state.items = [];
        state.total = 0;
    }
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;