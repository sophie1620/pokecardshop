import NavLink from "./nav-link";

export default function Header() {

  return (
    <>
      <header>
        <nav>
          <ul className="flex flex-row md:justify-around md:items-center gap-1 m-4">
            <li>
              <NavLink
                href="/"
              >
                Home
              </NavLink>
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

        <h1>Pokemon Card Shop</h1>
      </header>
    </>
  )
}