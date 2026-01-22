import styles from "./Cta.module.css";
import Button from "../Button.jsx";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/Animations/animations";

const Cta = () => {
  return (
    <motion.section
      className={styles.ctaContainer}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={styles.ctaText}>
        <motion.h2 variants={fadeUp}>
          Unlock Your <br />
          Professional Growth Today
        </motion.h2>
        <motion.p variants={fadeUp}>
          Start your journey toward smarter, verified learning with the only
          platform built for modern professionals.
        </motion.p>
        <Button text="Try 3 Lessons Free" className={styles.button} />
      </div>
    </motion.section>
  );
};

export default Cta;
