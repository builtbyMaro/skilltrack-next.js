import styles from './Cta.module.css'
import Button from '@/Components/Button.jsx';

const Cta = () => {
    

    return (
        <section className={styles.ctaContainer}>
            <div className={styles.ctaText}>
                <h2>Unlock Your <br/>Professional Growth Today</h2>
                <p>Start your journey toward smarter, verified learning with the only platform built for modern professionals.</p>
                <Button text='Try 3 Lessons Free' className={styles.button}/>
            </div>
        </section>
    );
};

export default Cta