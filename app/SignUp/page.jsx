"use client";
import 'boxicons/css/boxicons.min.css';
import styles from './signup.module.css';
import { useState } from 'react';
import Link from 'next/link';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {

        const newErrors = {};

        if (!userData.firstName.trim()) {
            newErrors.firstName = 'First Name is required';
        }

        if (!userData.lastName.trim()) {
            newErrors.lastName = 'Last Name is required';
        }

        if (!userData.email.trim() || !/\S+@\S+\.\S+/.test(userData.email)) {
            newErrors.email = 'Valid email is required';
        }

        if (!userData.password.trim() || userData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (userData.password !== userData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        return newErrors;
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            localStorage.setItem('userData', JSON.stringify(userData));
            setErrors({});
            setUserData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
    }

    return(
        <div className={styles.signupContainer}>
            <div className={styles.signupHeader}>
                <img src="/No-text-logo.png" alt="skillTrack Logo" className={styles.signupHeaderImg}/>
                <h1 className={styles.signupHeaderText}>Welcome to SkillTrack</h1>
            </div>
            <div className={styles.signupCard}>
                <form onSubmit={handleSignUp} className={styles.signupForm}>
                    <div className={styles.signupInputs}>
                        <div className={styles.nameInputs}>
                            <div className={styles.inputWithIcon}>
                                <input name='firstName' type="text" placeholder="First Name" className={styles.signupInput} onChange={handleChange} value={userData.firstName}/>
                                <i className={` ${'bx bx-user'} ${styles.icons}`}></i>
                                {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
                            </div>
                            <div className={styles.inputWithIcon}>
                                <input name='lastName' type="text" placeholder="Last Name" className={styles.signupInput} onChange={handleChange} value={userData.lastName}/>
                                <i className={` ${'bx bx-user'} ${styles.icons}`}></i> 
                                {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
                            </div>
                        </div>
                        <div className={styles.inputWithIcon}>
                            <input type="text"  name='email' placeholder='Email address' className={styles.signupInput} onChange={handleChange} value={userData.email}/>
                            <i className={` ${'bx bx-envelope'} ${styles.icons}`}></i>
                            {errors.email && <span className={styles.error}>{errors.email}</span>}
                        </div>
                        <div className={styles.passwordInputs}>
                            <div className={styles.inputWithIcon}>
                                <input name='password'type={showPassword ? 'text' : 'password'} placeholder='Password' className={styles.signupInput} onChange={handleChange} value={userData.password}/>
                                <i className={` ${'bx bx-lock-alt'} ${styles.icons}`}></i>
                                <i className={ showPassword ? `${'bx bx-hide'} ${styles.showPassword}` : `${'bx bx-show'} ${styles.showPassword}`} onClick={togglePasswordVisibility}></i>
                                {errors.password && <span className={styles.error}>{errors.password}</span>}
                            </div>
                            <div className={styles.inputWithIcon}>
                                <input name='confirmPassword' type={showPassword ? 'text' : 'password'} placeholder='Confirm Password' className={styles.signupInput} onChange={handleChange} value={userData.confirmPassword}/>
                                <i className={` ${'bx bx-lock-alt'} ${styles.icons}`}></i>
                                <i className={ showPassword ? `${'bx bx-hide'} ${styles.showPassword}` : `${'bx bx-show'} ${styles.showPassword}`} onClick={togglePasswordVisibility}></i>
                                {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
                            </div>
                        </div>
                        <button type='submit' className={styles.signupButton}> Sign Up</button>
                    </div>
                </form>
            </div>
            <h2 className={styles.logIn}>Already have an account? <Link href="/LogIn"><span>LogIn</span></Link></h2>
        </div>
    );
}

export default SignUp;