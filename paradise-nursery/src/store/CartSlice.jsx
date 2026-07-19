import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
        });
      } else {
        existingItem.quantity += 1;
      }

      state.totalQuantity += 1;
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.cartItems = state.cartItems.filter(item => item.id !== id);
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(item => item.id === id);

      if (item) {
        const quantityDiff = quantity - item.quantity;
        item.quantity = quantity;
        state.totalQuantity += quantityDiff;

        if (item.quantity <= 0) {
          state.cartItems = state.cartItems.filter(item => item.id !== id);
        }

        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
