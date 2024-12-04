"use client";
import { useState } from "react";
import Modal from "../modal/modal";
import CartModal from '../../components/cartBtn/cartModal';
import { useAppSelector } from "@/lib/hooks";

export default function CartButton() {
  const cartQuantity = useAppSelector(state => state.cart.totalQuantity) as number;

  const[isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleOpenCart() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <button onClick={handleOpenCart}>
        Cart {cartQuantity}
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