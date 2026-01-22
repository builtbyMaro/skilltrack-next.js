"use client";
import styles from "../signup.module.css";
import { motion } from "framer-motion";
import { stepVariants } from "@/lib/Animations/animations";
import validateInputs from "@/lib/Validations/InputValidation";

const Email = ({
  userData,
  onChange,
  onNext,
  users,
  onPrev,
  custom,
  errors,
  setErrors,
}) => {
  const handleContinue = () => {
    const validationErrors = validateInputs({ email: userData.email });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const emailExists = users.some(
      (u) => u.email.toLowerCase() === userData.email.toLowerCase()
    );

    if (emailExists) {
      setErrors({ email: "An account already exists with this email" });
      return;
    }

    setErrors({});
    onNext();
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
            type="text"
            name="email"
            placeholder="Pls enter your email address"
            className={styles.signupInput}
            value={userData.email}
            onChange={(e) => {
              onChange(e);
              setErrors({});
            }}
          />
          <i className={`bx bx-envelope ${styles.icons}`}></i>
        </div>

        {errors.email && <span className={styles.error}>{errors.email}</span>}
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
