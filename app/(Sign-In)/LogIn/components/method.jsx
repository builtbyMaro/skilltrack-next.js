"use client";
import styles from "../login.module.css";
import { motion } from "framer-motion";
import { stepVariants } from "@/lib/Animations/animations";
import Link from "next/link";

const Method = ({ onEmailSelect, custom }) => {
  return (
    <motion.div
      className={styles.methodStep}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      custom={custom}
      transition={stepVariants.transition}
    >
      <button type="button" className={styles.googleButton} disabled>
        <img src="/google-icon.svg" alt="Google" />
        Login with Google
      </button>

      <div className={styles.divider}>
        <span>or</span>
      </div>

      <button
        type="button"
        className={styles.emailButton}
        onClick={onEmailSelect}
      >
        Login with Email
      </button>
      <Link href="/ResetPassword" className={styles.forgotPassword}>
        Forgot Password?
      </Link>
    </motion.div>
  );
};

export default Method;
