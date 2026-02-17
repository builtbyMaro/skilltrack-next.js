"use client";
import styles from "../signup.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { stepVariants } from "@/lib/Animations/animations";
import validateInputs from "@/lib/Validations/InputValidation";

const Password = ({
  userData,
  onChange,
  handleSignUp,
  onPrev,
  custom,
  errors,
  setErrors,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    onChange(e);
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleContinue = () => {
    const validationErrors = validateInputs({
      password: userData.password,
      confirmPassword: userData.confirmPassword,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    handleSignUp();
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
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className={styles.signupInput}
              value={userData.password}
              onChange={handleChange}
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
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className={styles.signupInput}
              value={userData.confirmPassword}
              onChange={handleChange}
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
          Sign Up
        </button>
      </div>
    </motion.div>
  );
};

export default Password;
