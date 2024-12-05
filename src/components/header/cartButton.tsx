"use client";
import Modal from "../modal/modal";
import CartModal from '../cart/cartModal';
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { modalActions } from "@/lib/features/modalSlice";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function CartButton() {
  const dispatch = useAppDispatch();

  const cartQuantity = useAppSelector(state => state.cart.totalQuantity) as number;
  const isModalOpen = useAppSelector(state => state.modal.isModalOpen) as boolean;

  function handleOpenCart() {
    dispatch(modalActions.openModal())
  }

  function closeModal() {
    dispatch(modalActions.closeModal())
  }

  return (
    <>
      <button className="cart-button" onClick={handleOpenCart} aria-label="Shopping cart">
        <FontAwesomeIcon icon={faCartShopping} size="lg" />
        {cartQuantity}
      </button>

      <Modal 
        open={isModalOpen} 
        close={closeModal}
      >
        <CartModal />
      </Modal>
    </>
  )
}