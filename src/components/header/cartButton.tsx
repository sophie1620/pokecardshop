"use client";
import { useState } from "react";
import Modal from "../modal/modal";
import Cart from "../cart/cart";

export default function CartButton() {
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
        Cart 0
      </button>

      <Modal 
        open={isModalOpen} 
        close={closeModal}
      >
        <Cart />
      </Modal>
    </>
  )
}