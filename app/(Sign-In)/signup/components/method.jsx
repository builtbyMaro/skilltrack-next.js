"use client";
import styles from "../signup.module.css";
import { motion } from "framer-motion";
import { stepVariants } from "@/lib/Animations/animations";

const Method = ({ onEmailSelect, custom }) => {
  return (
    <motion.div
      className={styles.methodStep}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      custom={custom} // +1 for next, -1 for prev
      transition={stepVariants.transition}
    >
      <button type="button" className={styles.googleButton} disabled>
        <img src="/google-icon.svg" alt="Google" />
        Continue with Google
      </button>

      <div className={styles.divider}>
        <span>or</span>
      </div>

      <button
        type="button"
        className={styles.emailButton}
        onClick={onEmailSelect}
      >
        Continue with Email
      </button>
    </motion.div>
  );
};

export default Method;
