"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import styles from "../nav/nav.module.scss"

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/test" ? styles.active : ""
        }`}
        href="/test"
      >
        Test Page
      </Link>
    </nav>
  )
}
