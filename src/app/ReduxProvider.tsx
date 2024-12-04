"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { cartActions, ICartItem } from './../lib/features/cartSlice';

export default function ReduxProvider({ 
  initialCartState, 
  children
}: { 
    initialCartState?: {
        items:  ICartItem[], 
        totalQuantity: number, 
        totalAmount: number
      }, 
      children: React.ReactNode 
  }) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    
    if (initialCartState) {
      storeRef.current.dispatch(cartActions.replaceCart(initialCartState));
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}