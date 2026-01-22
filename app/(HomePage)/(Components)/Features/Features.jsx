import styles from "./Features.module.css";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/Animations/animations";

const Features = () => {
  return (
    <motion.section
      id="Features"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={styles.featuresContainer}>
        <h2 className={styles.featuresHeader}>
          Build your skills, measure your growth, and stay fully certified{" "}
          <br />
          <span>individually or with your team</span>.
        </h2>
        <div className={styles.featureCards}>
          <motion.div className={styles.card1} variants={fadeUp}>
            <div>
              <h3>Actual library of courses</h3>
              <p>
                Listen to the content from top-tier publishers (e.g., The Tax
                Institute, Deloitte, and Xero)
              </p>
            </div>
            <img src="/card1.png" alt="" />
          </motion.div>
          <motion.div className={styles.card2} variants={fadeUp}>
            <img src="/card2.png" alt="" />
            <h3>Quizzes to verify Each Lesson</h3>
          </motion.div>
          <motion.div className={styles.card3} variants={fadeUp}>
            <img src="/card3.png" alt="" />
            <div>
              <h3>Weekly Industry Updates</h3>
              <p>
                Stay informed with curated insights and regulatory changes
                delivered straight to your dashboard.
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card4} variants={fadeUp}>
            <div>
              <h3>Smart Progress Tracker</h3>
              <p>
                Track your professional development hours automatically and stay
                compliant with ease.
              </p>
            </div>
            <img src="/card4.png" alt="" />
          </motion.div>
          <motion.div className={styles.card5} variants={fadeUp}>
            <img src="/card5.png" alt="" className={styles.card5Img1} />
            <img src="/card5.1.png" alt="" className={styles.card5Img2} />
            <div>
              <h3>Verified Certificates</h3>
              <p>
                Get recognized credentials that validate your continued growth.
              </p>
            </div>
          </motion.div>
          <motion.div className={styles.card6} variants={fadeUp}></motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
