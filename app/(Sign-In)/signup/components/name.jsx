"use client";
import styles from "../signup.module.css";
import { motion } from "framer-motion";
import { stepVariants } from "@/lib/Animations/animations";
import validateInputs from "@/lib/Validations/InputValidation";

const Name = ({
  userData,
  onChange,
  onNext,
  onPrev,
  custom,
  errors,
  setErrors,
}) => {
  const handleChange = (e) => {
    onChange(e);
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleContinue = () => {
    const validationErrors = validateInputs({
      firstName: userData.firstName,
      lastName: userData.lastName,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    onNext();
  };

  return (
    <motion.div
      className={styles.nameStep}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      custom={custom}
      transition={stepVariants.transition}
    >
      <div className={styles.inputs}>
        <div className={styles.nameInputs}>
          <div className={styles.inputWithIcon}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className={styles.signupInput}
              value={userData.firstName}
              onChange={handleChange}
            />
            <i className={`bx bx-user ${styles.icons}`}></i>
            {errors.firstName && (
              <span className={styles.error}>{errors.firstName}</span>
            )}
          </div>

          <div className={styles.inputWithIcon}>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className={styles.signupInput}
              value={userData.lastName}
              onChange={handleChange}
            />
            <i className={`bx bx-user ${styles.icons}`}></i>
            {errors.lastName && (
              <span className={styles.error}>{errors.lastName}</span>
            )}
          </div>
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

export default Name;
