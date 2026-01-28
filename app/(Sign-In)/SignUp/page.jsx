"use client";
import "boxicons/css/boxicons.min.css";
import styles from "./signup.module.css";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Method from "./components/method";
import Email from "./components/email";
import Name from "./components/name";
import Password from "./components/password";
import { userExists } from "@/lib/Auth/userExists";
import { saveNewUser } from "@/lib/Auth/signupAuth";

const SignUp = () => {
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

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  const [errors, setErrors] = useState({});
  const handleSignUp = () => {
    const emailExists = userExists(users, userData.email);
    if (emailExists) {
      setErrors({ email: "*an account already exists with this email" });
      return;
    }

    const updatedUsers = saveNewUser(users, userData);
    setUsers(updatedUsers);

    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    alert("Sign Up Successful");
    setStep("method");
    setDirection(0);
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupHeader}>
        <img
          src="/No-text-logo.png"
          alt="skillTrack Logo"
          className={styles.signupHeaderImg}
        />
        <h1 className={styles.signupHeaderText}>Welcome to SkillTrack</h1>
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
              userData={userData}
              users={users}
              onChange={handleChange}
              onNext={() => handleNext("name")}
              onPrev={() => handleBack("method")}
              key="email"
              custom={direction}
              errors={errors}
              setErrors={setErrors}
            />
          )}
          {step === "name" && (
            <Name
              userData={userData}
              onChange={handleChange}
              onNext={() => handleNext("password")}
              onPrev={() => handleBack("email")}
              key="name"
              custom={direction}
              errors={errors}
              setErrors={setErrors}
            />
          )}
          {step === "password" && (
            <Password
              userData={userData}
              onChange={handleChange}
              handleSignUp={handleSignUp}
              onPrev={() => handleBack("name")}
              key="password"
              custom={direction}
              errors={errors}
              setErrors={setErrors}
            />
          )}
        </AnimatePresence>
      </div>
      <h2 className={styles.logIn}>
        Already have an account?{" "}
        <Link href="/LogIn">
          <span>LogIn</span>
        </Link>
      </h2>
    </div>
  );
};

export default SignUp;
