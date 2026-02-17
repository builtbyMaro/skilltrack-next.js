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
import { saveNewUser } from "@/lib/Auth/signupAuth";
import { useRouter } from "next/navigation";
import Spinner from "@/Components/spinner";

const SignUp = () => {
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
  const router = useRouter();
  const redirectUser = () => {
    setTimeout(() => {
      router.replace("/dashboard");
    }, 1000);
  };

  const handleSignUp = () => {
    const updatedUsers = saveNewUser(users, userData);
    setUsers(updatedUsers);

    localStorage.setItem("loggedInUser", JSON.stringify(userData));
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setStep("method");
    setDirection(0);
    setLoading(true);
    redirectUser();
  };

  if (loading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.successMessage}>
          <h4>Account created successfully!</h4>
          <h4>Redirecting to Dashboard...</h4>
        </div>
        <Spinner size={30} />
      </div>
    );
  }

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
        <Link href="/login">
          <span>LogIn</span>
        </Link>
      </h2>
    </div>
  );
};

export default SignUp;
