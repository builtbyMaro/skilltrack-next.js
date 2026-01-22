import styles from "./Benefits.module.css";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/Animations/animations";

const Benefits = () => {
  return (
    <section className={styles.benefitsContainer}>
      <motion.div
        className={styles.benefitsCards}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp} className={styles.benefitCard1}>
          <i className="bx bxs-brain"></i>
          <h2>Learn quickly and effectively</h2>
        </motion.div>
        <motion.div variants={fadeUp} className={styles.benefitCard2}>
          <i className="bx bx-line-chart"></i>
          <h2>Advance your career</h2>
        </motion.div>
        <motion.div variants={fadeUp} className={styles.benefitCard3}>
          <i className="bx  bxs-badge-check"></i>
          <h2>Stay certified and compliant</h2>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
