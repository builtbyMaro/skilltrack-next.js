"use client";
import Link from "next/link";
import styles from "./NavBar.module.css";
import Button from "../Button.jsx";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={styles.navBarContainer}>
        <div className={styles.navLogo}>
          <img src="/No-text-logo.png" alt="" className={styles.navImg} />
          <Link href="#Home">SkillTrack</Link>
        </div>
        <div className={styles.navBtns}>
          <div className={styles.navLinks}>
            <Link href="#Features">Features</Link>
            <Link href="#Pricing">Pricing</Link>
            <Link href="#Faq">FAQ</Link>
            <Link href="/LogIn">Login</Link>
          </div>
          <Button text="Sign Up" className={styles.signUpBtn} />
        </div>
        <div className={styles.menuIcon}>
          <i className={"bx bx-menu"} onClick={() => setIsOpen(true)}></i>
        </div>
      </nav>
      <div className={`${styles.mobileNav} ${isOpen ? styles.open : ""}`}>
        <div>
          <i
            className={`${styles.closeIcon} bx bx-x`}
            onClick={() => setIsOpen(false)}
          ></i>
        </div>

        <Link
          href="#Features"
          className={styles.navLink}
          onClick={() => setIsOpen(false)}
        >
          Features
        </Link>
        <Link
          href="#Pricing"
          className={styles.navLink}
          onClick={() => setIsOpen(false)}
        >
          Pricing
        </Link>
        <Link
          href="#Faq"
          className={styles.navLink}
          onClick={() => setIsOpen(false)}
        >
          FAQ
        </Link>
        <Link href="/LogIn" className={styles.navLink}>
          Login
        </Link>

        <Button text="Sign Up" className={styles.signUpBtn} />
      </div>
    </>
  );
};

export default Navbar;
