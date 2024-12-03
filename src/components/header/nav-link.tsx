"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import classes from './nav-link.module.scss';

interface INavLink {
  href: string, 
  children: ReactNode
}


export default function NavLink({ href, children }: INavLink) {
  const path: string | null = usePathname();

  const isActive = href === '/' 
    ? path === href
    : path?.startsWith(href);

  return (
    <>
      <Link 
        href={href}
        className={ isActive ? `${classes.activeNav} ${classes.linkNav}`  : `${classes.linkNav}` }
        >
        {children}
      </Link>
    </>
  )
}