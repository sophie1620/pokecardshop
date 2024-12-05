"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import { IPokeCardData } from "@/interfaces/interfacePokemonCard";
import { cartActions, ICartItem } from "@/lib/features/cartSlice";
import classes from './addToCartBtn.module.scss'
import { useEffect, useState } from "react";

export default function AddToCartBtn({item} : {item: IPokeCardData}) {
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.cart.items) as ICartItem[];
  const [cardQuantity, setCardQuantity] = useState<number>(0);

  function handleAddToCart() {
    dispatch(cartActions.addItemsToCart({
      name: item.name,
      price: item.price,
      id: item.id
    }))
  }

  useEffect(() => {
    const cardItem = items.filter((i) => (
      i.id === item.id 
      ? i
      : null
    ));

    setCardQuantity(cardItem[0].quantity)
  }, [items, item.id, item])

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