"use client";
import Link from 'next/link';
import styles from './navbar.module.css';
import { useState } from 'react';

const Navbar = ({ userImg, userName }) => {

  const [activePage, setActivePage] = useState('Dashboard')


  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <img src='./No-text-logo.png' alt="skilltrack Logo" className={styles.logo}/>
        <h2 className={styles.logoText}>SkillTrack</h2>
      </div>
      <div className={styles.navBtns}>
        <div className={styles.navLinks}>
            <Link href="/Dashboard" onClick={() => setActivePage('Dashboard')} className={ activePage === 'Dashboard' ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}>Dashboard</Link>
            <Link href="/Courses" onClick={() => setActivePage('Courses')} className={ activePage === 'Courses' ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}>Courses</Link>
            <Link href="/Updates"  onClick={() => setActivePage('Updates')} className={ activePage === 'Updates' ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}>Updates</Link>
        </div>
        <div className={styles.userProfile}>
            <img src={userImg || './default.jpg'} alt="profilepic" className={styles.userImg}/>
            <p className={styles.userName}>{userName || 'Princewill'}</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;