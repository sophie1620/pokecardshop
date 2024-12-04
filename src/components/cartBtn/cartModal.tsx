"use client";
import { cartActions, ICartItem } from '@/lib/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import classes from './cartModal.module.scss';

export default function CartModal() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items) as ICartItem[];

  function handleAddItem(item: ICartItem) {
    dispatch(cartActions.addItemsToCart({
      name: item.name,
      price: item.price,
      id: item.id
    }))
  }

  function handleRemoveItem(id: string) {
    dispatch(cartActions.removeItemFromCart(id));
  }

  return (
    <div className="modalContainer">
      <h1>Cart Items</h1>

      <div className="flex flex-col justify-start">
        <h2>Your items</h2>

        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex flex-row justify-between"
            >
              <div>
                <p>{item.name}</p>

                <div className="flex flex-row justify-evenly">
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: {item.price}</p>
                  <p>Total: {item.totalPrice}</p>
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <button 
                  onClick={() => handleAddItem(item)}
                  className={classes.addRemoveBtn}
                >+</button>
                <button 
                  onClick={() => handleRemoveItem(item.id)}
                  className={classes.addRemoveBtn}
                >-</button>
              </div>
            </li>
          ))}


          {/* <li className="flex flex-row justify-between">
            <p>item</p>

            <div className="flex flex-row">
              <span>number of item</span>
              <span>x</span>
              <span>cost </span>
            </div>

            <div className="flex flex-row gap-2">
              <button>+</button>
              <button>-</button>
            </div>
          </li> */}

        </ul>
      </div>
    </div>
  )
}