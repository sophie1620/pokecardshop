"use client";
import { useAppDispatch } from "@/lib/hooks";

import { IPokeCardData } from "@/interfaces/interfacePokemonCard";
import { cartActions } from "@/lib/features/cartSlice";
import classes from './addToCartBtn.module.scss'

export default function AddToCartBtn({item} : {item: IPokeCardData}) {

  const dispatch = useAppDispatch();

  function handleAddToCart() {
    dispatch(cartActions.addItemsToCart({
      name: item.name,
      price: item.price,
      id: item.id
    }))

  }
  return (

    <button
      className={classes.cartBtn}
      onClick={handleAddToCart}
    >
      Add to cart
    </button>
  )
}