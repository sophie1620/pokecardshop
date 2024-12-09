"use client";
import { cartActions, ICartItem, ICartState } from '@/lib/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { modalActions } from "@/lib/features/modalSlice";
import classes from './cartModal.module.scss';


export default function CartModal() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items) as ICartItem[];
  const cart = useAppSelector(state => state.cart) as ICartState;
  
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

  function handleClose() {
    dispatch(modalActions.closeModal());
  }

  function getCurrency(price: number) {
    return Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(price);
  }

  const empty = <div className='flex flex-col justify-between h-1/5'>
    <p className='text-center mt-6'>Your cart is empty. Continue shopping?</p>

    <div className='flex flex-row justify-center mt-6'>
      <button className='primary-button' onClick={handleClose} >Continue Shopping</button>
    </div>
  </div>

  const listItemStyle = "flex flex-row justify-between mb-4 pb-4";

  return (
    <div className="modalContainer">
      <h1>Cart Items</h1>

      {cartItems?.length === 0 && empty}

      {cartItems && cartItems.length > 0 && 
      <div className="flex flex-col justify-start mt-3">

        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className={cartItems.length > 1 ?  `${listItemStyle} ${classes.itemDivider}` : `${listItemStyle}`}
            >
              <div className='flex flex-col md:flex-row justify-between items-center gap-1 md:gap-5'>
                <p className='font-semibold text-lg w-32'>{item.name}</p>

                <div className="flex flex-row justify-evenly gap-5 ">
                  <p>Price: {getCurrency(item.price)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: {getCurrency(item.totalPrice)}</p>
                </div>
              </div>

              <div className="flex flex-row items-end gap-2">
                <button 
                  onClick={() => handleRemoveItem(item.id)}
                  className={classes.addRemoveBtn}
                >-</button>
                <button 
                  onClick={() => handleAddItem(item)}
                  className={classes.addRemoveBtn}
                >+</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      }

      <div className='flex flex-row justify-end mt-auto'>
        <p>Total Amount: {getCurrency(cart.totalAmount)}</p>
      </div>
    </div>
  )
}