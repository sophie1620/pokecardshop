"use client";
import NavLink from "./nav-link";
import CartButton from "./cartButton";

export default function Header() {

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

          <CartButton />
        </div>
      </header>
    </>
  )
}