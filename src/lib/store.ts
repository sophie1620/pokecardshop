import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import modalSlice from "./features/modalSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice.reducer,
      modal: modalSlice.reducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']