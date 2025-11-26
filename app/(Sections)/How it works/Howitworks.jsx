import styles from './Howitworks.module.css'

const HowItWorks = () => {
    const howItWorks = [
        {
            Heading: 'Explore the library',
            Body: 'Access our growing collection of business and finance audio lessons powered by insights from world-class publishers like Deloitte, CPA Australia, and Harvard Business Review.'
        },
        {
            Heading: 'Learn on the go',
            Body: 'Immerse yourself in flexible, audio-based learning experiences that cover every major professional competency.'
        },
        {
            Heading: 'Verify your progress',
            Body: 'Complete short, interactive quizzes to confirm your understanding and earn verified learning credits.'
        },
        {
            Heading: 'Receive your certificate',
            Body: 'Generate and download verified completion certificates recognized by top professional associations.'
        }
    ]

    return (
        <section>
            <div className={styles.hiwContainer}>
                <img src="/hiw.png" alt="SkilTrack App" className={styles.hiwImg}/>
                <div>
                    <div className={styles.hiwText}>
                        {howItWorks.map((item, index) => (
                            <div key={index} className={styles.hiwItems}>
                                <h2>{item.Heading}</h2>
                                <p>{item.Body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;