"use client";
import styles from "../login.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { stepVariants } from "@/lib/Animations/animations";
import validateInputs from "@/lib/Validations/InputValidation";

const Email = ({
  loginData,
  onPrev,
  onNext,
  custom,
  onChange,
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
      email: loginData.email,
      password: loginData.password,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

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
        <div className={styles.loginInputs}>
          <div className={styles.inputWithIcon}>
            <input
              name="email"
              type="text"
              placeholder="Email address"
              className={styles.loginInput}
              value={loginData.email}
              onChange={handleChange}
            />
            <i className={` ${"bx bx-envelope"} ${styles.icons}`}></i>
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>
          <div className={styles.inputWithIcon}>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={styles.loginInput}
              value={loginData.password}
              onChange={handleChange}
            />
            <i className={` ${"bx bx-lock-alt"} ${styles.icons}`}></i>
            <i
              className={
                showPassword
                  ? `${"bx bx-hide"} ${styles.showPassword}`
                  : `${"bx bx-show"} ${styles.showPassword}`
              }
              onClick={togglePasswordVisibility}
            ></i>
            {errors.password && (
              <span className={styles.error}>{errors.password}</span>
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
          Login
        </button>
      </div>
    </motion.div>
  );
};

export default Email;
