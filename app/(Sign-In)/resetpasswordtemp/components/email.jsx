"use client";
import styles from "../reset.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { stepVariants } from "@/lib/Animations/animations";
import validateInputs from "@/lib/Validations/InputValidation";
import { userExists } from "@/lib/Auth/userExists";

const Email = ({ onNext, users, onPrev, custom, errors, setErrors }) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: "" });
  };

  const handleContinue = () => {
    const validationErrors = validateInputs({ email });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const emailExists = userExists(users, email);
    if (!emailExists) {
      setErrors({ email: "*no account exists with this email" });
      return;
    }

    setErrors({});
    onNext(email);
  };

  return (
    <motion.div
      className={styles.emailStep}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      custom={custom}
      transition={stepVariants.transition}
    >
      <div className={styles.inputs}>
        <div className={styles.inputWithIcon}>
          <input
            name="email"
            type="text"
            placeholder="Enter your email address"
            onChange={handleChange}
            value={email}
            className={styles.resetInput}
          />
          <i className={`bx bx-envelope ${styles.icons}`}></i>
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.prevBtn} onClick={onPrev}>
          <i className="bx bx-chevron-left"></i>
        </button>
        <button
          type="button"
          className={styles.nextBtn}
          onClick={handleContinue}
        >
          next
          <i className="bx bx-right-arrow-circle"></i>
        </button>
      </div>
    </motion.div>
  );
};

export default Email;
