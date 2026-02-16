"use client";
import "boxicons/css/boxicons.min.css";
import styles from "./login.module.css";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Method from "./components/method";
import Email from "./components/email";
import loginUser from "@/lib/Auth/loginAuth";
import Spinner from "@/Components/spinner";

const Login = () => {
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
    setLoginData({
      email: "",
      password: "",
    });
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(existingUsers);
  }, []);

  const [errors, setErrors] = useState({});
  const router = useRouter();
  const redirectUser = () => {
    setTimeout(() => {
      router.replace("/dashboard");
    }, 1000);
  };
  const handleLogin = () => {
    const result = loginUser(users, loginData);

    if (!result.success) {
      setErrors({ [result.field]: result.message });
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(result.user));
    setLoginData({
      email: "",
      password: "",
    });
    redirectUser();
    setErrors({});
    setStep("method");
    setDirection(0);
    setLoading(true);
  };

  if (loading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.successMessage}>
          <h4>Logging In...</h4>
        </div>
        <Spinner size={30} />
      </div>
    );
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginHeader}>
        <img
          src="/No-text-logo.png"
          alt="skillTrack Logo"
          className={styles.loginHeaderImg}
        />
        <h1 className={styles.loginHeaderText}>Welcome back</h1>
      </div>
      <div className={styles.card}>
        <AnimatePresence exitBeforeEnter initial={false} custom={direction}>
          {step === "method" && (
            <Method
              onEmailSelect={() => handleNext("email")}
              custom={direction}
              key="method"
            />
          )}
          {step === "email" && (
            <Email
              onNext={() => {
                handleLogin();
              }}
              onChange={handleChange}
              onPrev={() => handleBack("method")}
              key="email"
              custom={direction}
              errors={errors}
              setErrors={setErrors}
              loginData={loginData}
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

export default Login;
