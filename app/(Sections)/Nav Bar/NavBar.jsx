import Link from 'next/link';
import styles from './NavBar.module.css'
import Button from '@/Components/Button.jsx';

const Navbar = () => {


    return(
        <nav className={styles.navWrapper}>
           <div className={styles.navBarContainer}>
             <div>
                <img src="/SkillTrack_Logo.png" alt="" className={styles.navImg}/>
            </div>
            <div className={styles.navBtns}>
                <div className={styles.navLinks}>
                    <Link href="#Features">Features</Link>
                    <Link href="#Pricing">Pricing</Link>
                    <Link href="#Faq">FAQ</Link>
                    <Link href="/LogIn">Login</Link>
                </div>
                <Button text='Sign Up' className={styles.signUpBtn}/>
            </div>
           </div>
        </nav>
    )
};

export default Navbar;