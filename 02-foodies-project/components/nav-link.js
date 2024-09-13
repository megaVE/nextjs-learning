"use client"

import styles from "./nav-link.module.css"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname()

  return (
    <Link
      href={href}
      className={`${styles.link} ${path.startsWith(href) ? styles.active : ''}`}
    >
      {children}
    </Link>
  )
}