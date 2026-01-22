"use client";
import "boxicons/css/boxicons.min.css";
import styles from "./reset.module.css";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Method from "./components/method";
import Email from "./components/email";
import Password from "./components/password";
import { resetUserPassword } from "@/lib/Auth/resetAuth";
import useBackNavigation from "@/lib/Hooks/useBackNavigation";

const Reset = () => {
  const [step, setStep] = useState("method");
  const [direction, setDirection] = useState(0);

  const handleNext = (nextStep) => {
    setDirection(1);
    setStep(nextStep);
  };

  const handleBack = (prevStep) => {
    setDirection(-1);
    setStep(prevStep);
    setErrors({});
  };

  useBackNavigation(step, () => {
    if (step === "email") handleBack("method");
    if (step === "password") handleBack("email");
  });

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(existingUsers);
  }, []);

  const [resetEmail, setResetEmail] = useState("");
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setNewPassword({
      ...newPassword,
      [e.target.name]: e.target.value,
    });
  };

  const [errors, setErrors] = useState({});
  const handleReset = () => {
    const updatedUsers = resetUserPassword(
      users,
      resetEmail,
      newPassword.password,
    );
    setUsers(updatedUsers);
    setNewPassword({
      password: "",
      confirmPassword: "",
    });

    alert("Reset successful!");
    setResetEmail("");
    setStep("method");
  };

  return (
    <div className={styles.resetContainer}>
      <div className={styles.resetHeader}>
        <img
          src="/No-text-logo.png"
          alt="skillTrack Logo"
          className={styles.resetHeaderImg}
        />
        <h1 className={styles.resetHeaderText}>Reset Password</h1>
      </div>
      <div className={styles.card}>
        <AnimatePresence exitBeforeEnter initial={false} custom={direction}>
          {step === "method" && (
            <Method
              onEmailSelect={() => handleNext("email")}
              key="method"
              custom={direction}
            />
          )}
          {step === "email" && (
            <Email
              users={users}
              onNext={(email) => {
                handleNext("password");
                setResetEmail(email);
              }}
              onPrev={() => handleBack("method")}
              key="email"
              custom={direction}
              errors={errors}
              setErrors={setErrors}
            />
          )}
          {step === "password" && (
            <Password
              onChange={handleChange}
              newPassword={newPassword}
              handleReset={handleReset}
              onPrev={() => handleBack("email")}
              key="password"
              custom={direction}
              errors={errors}
              setErrors={setErrors}
            />
          )}
        </AnimatePresence>
      </div>
      <h2 className={styles.signUp}>
        Don't have an account yet?{" "}
        <Link href="/SignUp">
          <span>Sign Up</span>
        </Link>
      </h2>
    </div>
  );
};

export default Reset;
