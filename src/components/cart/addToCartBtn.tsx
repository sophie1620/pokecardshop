"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import { IPokemonCardData } from "@/interfaces/interfacePokemonCard";
import { cartActions, ICartItem } from "@/lib/features/cartSlice";
import classes from './addToCartBtn.module.scss'
import { useEffect, useState } from "react";

export default function AddToCartBtn({item} : {item: IPokemonCardData}) {
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.cart.items) as ICartItem[];
  const [cardQuantity, setCardQuantity] = useState<number>(0);

    useEffect(() => {
    const cardItem = items.find((i) => (i.id === item.id));
    setCardQuantity(cardItem?.quantity ?? 0)
  }, [items, item.id])
  
  function handleAddToCart() {
    dispatch(cartActions.addItemsToCart({
      name: item.name,
      price: item.price,
      id: item.id
    }));
  }

  return (
    <>
      <p>Quantity: {cardQuantity}</p>
      <button
        className={classes.cartBtn}
        onClick={handleAddToCart}
        >
        Add to cart
      </button>
    </>
  )
}