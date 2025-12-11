"use client";
import 'boxicons/css/boxicons.min.css';
import styles from './reset.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Reset = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const [errors, setErrors] = useState({});
    const [savedUser, setSavedUser] = useState(null);
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData')) || null;
        setSavedUser(userData);
    }, []);

    const [newPassword, setNewPassword] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setNewPassword({
            ...newPassword,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        const newErrors = {};

        if (!newPassword.email.trim() || !/\S+@\S+\.\S+/.test(newPassword.email)) {
            newErrors.email = 'Valid email is required';
        }

        if (!newPassword.password.trim() || newPassword.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (newPassword.password !== newPassword.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        return newErrors;
    }

    const handleReset = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        } 
        
        if ( !savedUser || newPassword.email !== savedUser.email) {
            setErrors({ email: 'Account does not exist' });
            return;
        }
        
        else {
            alert('Reset successful!');
            setErrors({});
            setNewPassword({
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
    }

    return(
        <div className={styles.resetContainer}>
            <div className={styles.resetHeader}>
                <img src="/No-text-logo.png" alt="skillTrack Logo" className={styles.resetHeaderImg}/>
                <h1 className={styles.resetHeaderText}>Reset Password</h1>
            </div>
            <div className={styles.resetCard}>
                <form onSubmit={handleReset} className={styles.resetForm}>
                    <div className={styles.resetInputs}>
                        <div className={styles.inputWithIcon}>
                            <input name='email' type="text" placeholder='Enter your email address' onChange={handleChange} value={newPassword.email} className={styles.resetInput}/>
                            <i className={` ${'bx bx-envelope'} ${styles.icons}`}></i>
                            {errors.email && <span className={styles.error}>{errors.email}</span>}
                        </div>
                        <div className={styles.inputWithIcon}>
                            <input name='password' type={ showPassword ? 'text' : 'password'} placeholder='New password' onChange={handleChange} value={newPassword.password} className={styles.resetInput}/>
                            <i className={` ${'bx bx-lock-alt'} ${styles.icons}`}></i>
                            <i className={ showPassword ? `${'bx bx-hide'} ${styles.showPassword}` : `${'bx bx-show'} ${styles.showPassword}`} onClick={togglePasswordVisibility}></i>
                            {errors.password && <span className={styles.error}>{errors.password}</span>}
                        </div>
                        <div className={styles.inputWithIcon}>
                            <input name='confirmPassword' type={ showPassword ? 'text' : 'password'} placeholder='Confirm new password' onChange={handleChange} value={newPassword.confirmPassword} className={styles.resetInput}/>
                            <i className={` ${'bx bx-lock-alt'} ${styles.icons}`}></i>
                            <i className={ showPassword ? `${'bx bx-hide'} ${styles.showPassword}` : `${'bx bx-show'} ${styles.showPassword}`} onClick={togglePasswordVisibility}></i>
                            {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
                        </div>
                    </div>
                    <button type='submit' className={styles.resetButton}>Reset Password</button>
                </form>
            </div>
            <h2 className={styles.signUp}>Don't have an account yet? <Link href="/SignUp"><span>Sign Up</span></Link></h2>
        </div>
    )
}

export default Reset;