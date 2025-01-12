import React from 'react';
import styles from "./Intro.module.scss";
import IntroIcon from "../../assets/login/intro.png";

export default function Intro() {
    return (
        <main className={styles['intro-main']}>
            <section className={styles['intro-logo-section']}>
                <div className={styles['intro-logo-container']}>
                    <img src={IntroIcon} alt="intro" />
                    <h1>Daily Dashboard</h1>
                </div>
                <div className={styles['intro-btn-container']}>
                    <button className={styles['intro-login-btn']}>Login</button>
                    <button className={styles['intro-sign-up-btn']}>Sign Up</button>
                </div>
            </section>
            <section className={styles['intro-guest-section']}>
                <p>Continue as a guest</p>
            </section>
        </main>
    )
}
