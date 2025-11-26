import styles from './Benefits.module.css';

const Benefits = () => {

    return (
        <section>
            <div className={styles.benefitsContainer}>
                <div className={styles.benefitCard1}>
                    <i className='bx bxs-brain'></i>  
                    <h2>Learn quickly and effectively</h2>
                </div>
                <div className={styles.benefitCard2}>
                    <i className='bx bx-line-chart'></i> 
                    <h2>Advance your career</h2>
                </div>
                <div className={styles.benefitCard3}>
                    <i className='bx  bxs-badge-check'></i>
                    <h2>Stay certified and compliant</h2>
                </div>
            </div>
        </section>
    );
};

export default Benefits;