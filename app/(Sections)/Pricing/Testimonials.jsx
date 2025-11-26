import styles from './Pricing.module.css'

const Testimonial = () => {


    return(
        <div className={styles.testimonials}>
            <h2>You're In Safe Hands</h2>
            <div className={styles.testimonialCards}>
                <div className={`${styles.testimonialCard} ${styles.card1}`}>
                    <h3>"The lessons are engaging, relevant, and fit right into my daily routine. Finally, a smarter way to manage professional growth."</h3>
                    <div className={styles.testimonialInfo}>
                        <img src="/DanielReed.jpg" alt="Jordan Ellis" />
                        <div>
                            <h4>Jordan Ellis</h4>
                            <p>Partner, Apex Accounting</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.testimonialCard} ${styles.card2}`}>
                    <h3>"Beautifully curated and incredibly practical for busy professionals."</h3>
                    <div className={styles.testimonialInfo}>
                        <img src="/aishamalik.jpg" alt="Maya Tran" />
                        <div>
                            <h4>Maya Tran</h4>
                            <p>Director, FinEdge</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.testimonialCard} ${styles.card3}`}>
                    <h3>"Finally, a product that makes staying compliant easy."</h3>
                    <div className={styles.testimonialInfo}>
                        <img src="/willians.jpg" alt="Carla Hughes" />
                        <div>
                            <h4>Carla Hughes</h4>
                            <p>CPA Partner</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.testimonialCard} ${styles.card4}`}>
                    <h3>"Love catching up on lessons during my morning walks!"</h3>
                    <div className={styles.testimonialInfo}>
                        <img src="/jamesoconor.jpg" alt="Leo Turner" />
                        <div>
                            <h4>Leo Turner</h4>
                            <p>Financial Advisor</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.testimonialCard} ${styles.card5}`}>
                    <h3>"An absolute must for anyone serious about professional growth."</h3>
                    <div className={styles.testimonialInfo}>
                        <img src="/marina.jpg" alt="Erin Blake" />
                        <div>
                            <h4>Erin Blake</h4>
                            <p>Head of Finance, Atlas Group</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.testimonialCard} ${styles.card6}`}>
                    <h3>"Simple, intuitive, and impactful. I’ve learned more in a week than months of traditional training."</h3>
                    <div className={styles.testimonialInfo}>
                        <img src="/Oliver.png" alt="Oliver Davis" />
                        <div>
                            <h4>Oliver Davis</h4>
                            <p>Senior Analyst, BrightLedger</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.testimonialCard} ${styles.card7}`}>
                    <h3>"The verified certificates make it easy to prove my learning progress to clients and employers."</h3>
                    <div className={styles.testimonialInfo}>
                        <img src="/Hannah.png" alt="Hannah McIntyre" />
                        <div>
                            <h4>Hannah McIntyre</h4>
                            <p>Tax Consultant, Insight Partners</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.testimonialCard} ${styles.card8}`}>
                    <h3>"This platform finally bridges the gap between convenience and credibility in online learning."</h3>
                    <div className={styles.testimonialInfo}>
                        <img src="/James.png" alt="James O’Connell" />
                        <div>
                            <h4>James O’Connell</h4>
                            <p>CFO, Nova Group</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.testimonialCard} ${styles.card9}`}>
                    <h3>"The bite-sized lessons are perfect for professionals who want to stay sharp without wasting time."</h3>
                    <div className={styles.testimonialInfo}>
                        <img src="/Amelia.png" alt="Amelia Ross" />
                        <div>
                            <h4>Amelia Ross</h4>
                            <p>Founder, LedgerWorks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;