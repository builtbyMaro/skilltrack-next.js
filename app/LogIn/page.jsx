"use client";
import 'boxicons/css/boxicons.min.css';
import styles from './login.module.css';
import { useState } from 'react';
import Link from 'next/link';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const [errors, setErrors] = useState({});
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        const newErrors = {};
        const savedUser = JSON.parse(localStorage.getItem('userData')) || [];
        
        if (loginData.email !== savedUser.email) {
            newErrors.email = 'Email not found';
        }

        if (loginData.password !== savedUser.password) {
            newErrors.password = 'Incorrect password';
        }

        return newErrors;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            alert('Login successful!');
            setErrors({});
            setLoginData({
                email: '',
                password: ''
            });
        }
    }

    return(
        <div className={styles.loginContainer}>
            <div className={styles.loginHeader}>
                <img src="/No-text-logo.png" alt="skillTrack Logo" className={styles.loginHeaderImg}/>
                <h1 className={styles.loginHeaderText}>Welcome back</h1>
            </div>
            <div className={styles.loginCard}>
                    <form onSubmit={handleLogin} className={styles.loginForm}>
                        <div className={styles.loginInputs}>
                            <div className={styles.inputWithIcon}>
                                <input name='email' type="text" placeholder="Email address"className={styles.loginInput} value={loginData.email} onChange={handleChange}/>
                                <i className={` ${'bx bx-envelope'} ${styles.icons}`}></i>
                                {errors.email && <span className={styles.error}>{errors.email}</span>}
                            </div>
                            <div className={styles.inputWithIcon}>
                                <input name='password' type={ showPassword ? 'text' : 'password'}  placeholder="Password" className={styles.loginInput} value={loginData.password} onChange={handleChange}/>
                                <i className={` ${'bx bx-lock-alt'} ${styles.icons}`}></i>
                                <i className={ showPassword ? `${'bx bx-hide'} ${styles.showPassword}` : `${'bx bx-show'} ${styles.showPassword}`} onClick={togglePasswordVisibility}></i>
                                {errors.password && <span className={styles.error}>{errors.password}</span>}
                            </div>
                        </div>
                        <div className={styles.loginActions}>
                            <button className={styles.loginButton} type='submit'> Log In</button>
                            <Link href="/ResetPassword" className={styles.forgotPassword}>Forgot Password?</Link>
                        </div>
                    </form>
            </div>
            <h2 className={styles.signUp}>Don't have an account yet? <Link href="/SignUp"><span>Sign Up</span></Link></h2>
        </div>
    )
}

export default Login;