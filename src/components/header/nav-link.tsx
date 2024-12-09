"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import classes from './nav-link.module.scss';

interface INavLink {
  href: string, 
  children: ReactNode, 
  menuToggle?: () => void,
  isButton?: boolean
}


export default function NavLink({ href, children, menuToggle, isButton = false }: INavLink) {
  const path: string | null = usePathname();

  const isActive = href === '/' 
    ? path === href
    : path?.startsWith(href);

  return (
    <>
      <Link 
        href={href}
        className={ isButton
                      ? `${classes.isButton}`
                      : isActive 
                        ? `${classes.activeNav} ${classes.linkNav}`  
                        : `${classes.linkNav}` 
                  }
        onClick={menuToggle}
        >
        {children}
      </Link>
    </>
  )
}