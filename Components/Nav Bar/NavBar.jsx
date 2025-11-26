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
                    <a href="">Features</a>
                    <a href="">Pricing</a>
                    <a href="">FAQ</a>
                    <a href="">Login</a>
                </div>
                <Button text='Sign Up' className={styles.signUpBtn}/>
            </div>
           </div>
        </nav>
    )
};

export default Navbar;