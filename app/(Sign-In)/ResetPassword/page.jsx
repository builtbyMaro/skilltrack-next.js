"use client";
import "boxicons/css/boxicons.min.css";
import styles from "./reset.module.css";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Method from "./components/method";
import Email from "./components/email";
import Password from "./components/password";
import { resetUserPassword } from "@/lib/Auth/resetAuth";
import Spinner from "@/Components/spinner";

const Reset = () => {
  const [loading, setLoading] = useState(false);
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
  const router = useRouter();
  const redirectUser = () => {
    setTimeout(() => {
      router.replace("/login");
    }, 1000);
  };
  const handleReset = () => {
    const updatedUsers = resetUserPassword(
      users,
      resetEmail,
      newPassword.password,
    );
    setUsers(updatedUsers);
    setLoading(true);
    setNewPassword({
      password: "",
      confirmPassword: "",
    });

    alert("Reset successful!");
    setResetEmail("");
    setStep("method");
    redirectUser();
  };

  if (loading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.successMessage}>
          <h4>Password reset successful!</h4>
          <h4>Redirecting to Log In...</h4>
        </div>
        <Spinner size={30} />
      </div>
    );
  }

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
        <Link href="/signup">
          <span>Sign Up</span>
        </Link>
      </h2>
    </div>
  );
};

export default Reset;
