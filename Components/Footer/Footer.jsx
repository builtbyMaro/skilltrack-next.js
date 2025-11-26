import styles from './Footer.module.css'

const Footer = () => {


    return (
        <section className={styles.footerContainer}>
            <div className={styles.side1}>
                <div className={styles.footerImgWrapper}>
                    <img src="/SkillTrack_Logo.png" alt="Skilltrack logo" className={styles.footerImg}/>
                </div>
                <div className={styles.bottom}>
                    <h3>Verified Learning for Business Professionals</h3>
                    <a href="">© All rights reserved, SkillTrack Pty Ltd.</a>
                </div>
            </div>
            <div className={styles.side2}>
                <div className={styles.card}>
                    <h3>Company</h3>
                    <div className={styles.links}>
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                    </div>
                </div>
                <div className={styles.card}>
                    <h3>Connect with us</h3>
                    <div className={styles.links}>
                        <a href="">Email</a>
                        <a href="">Facebook</a>
                        <a href="">Linkedin</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;