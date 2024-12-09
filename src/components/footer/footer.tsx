import NavLink from "../header/nav-link"

export default function footer() {
  return (
    <>
      <footer>
        <ul className="flex flex-row justify-center gap-3 mt-3 mb-4">
          <li>
              <NavLink
                href="/"
              >
                Home
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
        <p className="text-center mb-3">Created by Sophie Lai</p>
      </footer>
    </>
  )
}