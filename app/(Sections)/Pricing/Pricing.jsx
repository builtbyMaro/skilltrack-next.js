import Button from '@/Components/Button.jsx';
import Testimonials from './Testimonials.jsx'
import styles from './Pricing.module.css'

const Pricing = () => {


    return(
        <section className={styles.pricingSection}>
            <div className={styles.pricing}>
                <h2>Simple, transparent pricing everything included.</h2>
                <div className={styles.priceCard}>
                    <div className={styles.billingTime}>
                        <h3 className={`${styles.billing} ${styles.billingActive}`}>Monthly</h3>
                        <h3 className={styles.billing}>Yearly</h3>
                    </div>
                    <div>
                        <h2>$19<span>/ month</span></h2>
                        <p>Per user, billed Monthly</p>
                    </div>
                    <div className={styles.benefit}>
                        <i className='bx  bxs-badge-check'></i>
                        <h3>All courses and updates</h3>
                    </div>
                    <div className={styles.benefit}>
                        <i className='bx  bxs-badge-check'></i>
                        <h3>New content added weekly</h3>
                    </div>
                    <div className={styles.benefit}>
                        <i className='bx  bxs-badge-check'></i>
                        <h3>Verified tracking and certification</h3>
                    </div>
                    <div className={styles.benefit}>
                        <i className='bx  bxs-badge-check'></i>
                        <h3>Personal and team dashboards</h3>
                    </div>
                    <Button text='Get Started' className={styles.button}/>
                </div>
            </div>
            <Testimonials />
        </section>
    );
};

export default Pricing;