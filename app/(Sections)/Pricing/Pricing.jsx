"use client";
import Button from '@/Components/Button.jsx';
import Testimonials from './Testimonials.jsx'
import styles from './Pricing.module.css'
import { useState } from 'react';

const Pricing = () => {

    const [billingType, setBillingType] = useState('monthly')
    const Monthly = () => {
        setBillingType('monthly')
    }
    const Yearly = () => {
        setBillingType('yearly')
    }

    return(
        <section className={styles.pricingSection} id='Pricing'>
            <div className={styles.pricing}>
                <h2>Simple, transparent pricing everything included.</h2>
                <div className={styles.priceCard}>
                    <div className={styles.billingTime}>
                        <h3 className={billingType === 'monthly' ? `${styles.billing} ${styles.billingActive}` : styles.billing} onClick={Monthly}>Monthly</h3>
                        <h3 className={billingType === 'yearly' ? `${styles.billing} ${styles.billingActive}` : styles.billing} onClick={Yearly}>Yearly</h3>
                    </div>
                    <div>
                        <h2>{billingType === 'monthly' ? '$19' : '$156'}<span>{billingType === 'monthly' ? '/month' : '/year'}</span></h2>
                        <p>{billingType === 'monthly' ? 'Per user, billed Monthly' : 'per user, billed Yearly ($13/month Save 31%)'}</p>
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