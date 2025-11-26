import styles from './Faq.module.css'

const Faq = () => {
    const faq = [
        {
            Question: 'Is the content relevant to my profession?',
            Answer: 'Yes! We curate lessons specifically for finance, business, and accounting professionals with regular updates.'
        },
        {
            Question: 'Will my development hours be recognized by my association?',
            Answer: 'Our verified tracking is designed to meet CPD/PD requirements for most professional bodies.'
        },
        {
            Question: 'What if I’m short on time?',
            Answer: 'No worries, our audio lessons make learning flexible and mobile-friendly.'
        },
        {
            Question: 'Can I cancel anytime?',
            Answer: 'Absolutely. You can pause or cancel your subscription at any time from your dashboard.'
        },
        {
            Question: 'How is this different from other learning platforms?',
            Answer: 'We focus on verified, industry specific learning not generic video courses, so every minute you invest actually counts.'
        }
    ]

    return(
        <section className={styles.faqContainer}>
            <h2>Frequently<br />Asked Questions</h2>
            <div className={styles.faqItems}>
                {faq.map((item, index) => (
                    <div key={index} className={styles.accordionItem}>
                        <div className={styles.accordionQuestion}>
                            <h3>{item.Question}</h3>
                            <i className='bx  bx-chevron-down'    ></i>
                        </div>
                        <p className={styles.accordionAnswer}>{item.Answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq