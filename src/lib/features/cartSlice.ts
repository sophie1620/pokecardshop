import { createSlice } from "@reduxjs/toolkit";

export interface ICartItem {
  name: string,
  quantity: number, 
  price: number, 
  totalPrice: number,
  id: string
}

interface ICartState {
  items: ICartItem[],
  totalQuantity: number, 
  totalAmount: number, 
  changed: boolean
}

const initialState: ICartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  changed: false
}

const cartSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemsToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item: ICartItem) => item.id === newItem.id);

      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          name: newItem.name,
          quantity: 1, 
          price: newItem.price,
          totalPrice: newItem.price,
          id: newItem.id
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      state.totalQuantity--;
      state.changed = true;

      if (existingItem!.quantity === 1) {
        state.items = state.items.filter(item => item.id === id);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice = existingItem!.totalPrice - existingItem!.price;
      }
    }
  }
});
export const cartActions = cartSlice.actions;
export default cartSlice;