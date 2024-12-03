"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface INavLink {
  href: string, 
  children: ReactNode
}


export default function NavLink({ href, children }: INavLink) {
  const path: string | null = usePathname();

  return (
    <>
      <Link 
        href={href}
        className={ (path === href || path?.startsWith(href)) ? 'activeNav linkNav' : 'linkNav' }
        >
        {children}
      </Link>
    </>
  )
}