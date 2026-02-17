"use client";
import styles from "../reset.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { stepVariants } from "@/lib/Animations/animations";
import validateInputs from "@/lib/Validations/InputValidation";

const Password = ({
  onChange,
  newPassword,
  handleReset,
  onPrev,
  custom,
  errors,
  setErrors,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    onChange(e);
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleContinue = () => {
    const validationErrors = validateInputs({
      password: newPassword.password,
      confirmPassword: newPassword.confirmPassword,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    handleReset();
  };

  return (
    <motion.div
      className={styles.passwordStep}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      custom={custom}
      transition={stepVariants.transition}
    >
      <div className={styles.inputs}>
        <div className={styles.passwordInputs}>
          <div className={styles.inputWithIcon}>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="New password"
              value={newPassword.password}
              onChange={handleInputChange}
              className={styles.resetInput}
            />
            <i className={`bx bx-lock-alt ${styles.icons}`}></i>
            <i
              className={
                showPassword
                  ? `bx bx-hide ${styles.showPassword}`
                  : `bx bx-show ${styles.showPassword}`
              }
              onClick={togglePasswordVisibility}
            ></i>
            {errors.password && (
              <span className={styles.error}>{errors.password}</span>
            )}
          </div>

          <div className={styles.inputWithIcon}>
            <input
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm new password"
              value={newPassword.confirmPassword}
              onChange={handleInputChange}
              className={styles.resetInput}
            />
            <i className={`bx bx-lock-alt ${styles.icons}`}></i>
            <i
              className={
                showPassword
                  ? `bx bx-hide ${styles.showPassword}`
                  : `bx bx-show ${styles.showPassword}`
              }
              onClick={togglePasswordVisibility}
            ></i>
            {errors.confirmPassword && (
              <span className={styles.error}>{errors.confirmPassword}</span>
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
          Reset password
        </button>
      </div>
    </motion.div>
  );
};

export default Password;
