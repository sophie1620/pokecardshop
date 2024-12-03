"use client";
import NavLink from "./nav-link";
import CartButton from "./cartButton";
import Modal from "../modal/modal";

import { useState } from "react";

export default function Header() {
  const[isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <header>
        <h1>Pokemon Card Shop</h1>
        <div className="flex flex-row justify-around">
          <nav className="w-4/5">
            <ul className="flex flex-row md:justify-around md:items-center gap-1 p-4">
              <li>
                <NavLink
                  href="/"
                  >Home</NavLink>
              </li>
              <li>
                <NavLink
                  href="/shop"
                  >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/about"
                  >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  href="/contactUs"
                  >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          <CartButton 
            open={openModal}
            close={closeModal}
            isModalOpen={isModalOpen}
          />
        </div>
      </header>

      <Modal open={isModalOpen} onClose={closeModal}>
        <p>testing</p>
      </Modal>
    </>
  )
}