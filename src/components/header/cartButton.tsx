"use client";
import { IModalProps } from "@/interfaces/interfaceModal";

export default function CartButton({open}: IModalProps) {

  function handleOpenCart() {
    open();
  }

  return (
    <button onClick={handleOpenCart}>
      Cart 0
    </button>
  )
}