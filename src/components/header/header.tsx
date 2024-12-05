"use client";
import NavLink from "./nav-link";
import CartButton from "./cartButton";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

interface INav {
  page: string,
  href: string
}

const navigation: INav[] = [
  {
    page: 'Home',
    href: '/'
  },
  {
    page: 'Shop',
    href: '/shop'
  },
  {
    page: 'About',
    href: '/about'
  },
  {
    page: 'Contact Us',
    href: 'contactUs'
  },
];

  export default function Header() {
  const navRef = useRef<HTMLElement | null>(null)
  const [showNav, setShowNav] = useState<boolean>(false);

  function handleToggle() {
    setShowNav(prevState => !prevState);
  }

  function handleMobileMenu() {
    if (showNav) {
      setShowNav(false);
    }
  }

  const nav = <>
                {navigation.map((nav) => (
                  <li key={nav.page}>
                      <NavLink
                        href={nav.href}
                        menuToggle={handleMobileMenu}
                    >{nav.page}</NavLink>
                  </li>
                ))}
              </>

  return (
    <>
      <header>
        <h1>Pokemon Card Shop</h1>

        <div className="flex flex-row justify-between md:justify-around items-center relative">
          
          <nav className="mobile-nav md:hidden left-0" ref={navRef}>
            <button
              onClick={handleToggle}
              aria-haspopup="true"
              aria-expanded={showNav}
              className="ml-3 btn"
            >
              <span className="sr-only">Menu</span>
              <FontAwesomeIcon icon={ !showNav ? faBars : faXmark}  size="lg"/>
            </button>

            <ul className={showNav ? 'showMenu' : 'hidden'} >
              { nav }
            </ul>
          </nav>

          {/* md screen nav */}
          <nav className="w-4/5 hidden md:inline-block">
            <ul className="flex flex-row md:justify-around md:items-center gap-1 p-4">
              {nav}
            </ul>
          </nav>

          <CartButton />
        </div>
      </header>
    </>
  )
}