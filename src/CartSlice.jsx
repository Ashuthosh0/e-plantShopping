import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // ✅ REMOVE ITEM
    removeItem: (state, action) => {
      const name = action.payload;

      state.items = state.items.filter(item => item.name !== name);
    },

    // ✅ UPDATE QUANTITY
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const itemToUpdate = state.items.find(item => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});


// ✅ EXPORT ACTIONS
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// ✅ EXPORT REDUCER
export default cartSlice.reducer;