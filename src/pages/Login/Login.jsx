import React, { useState } from 'react';
import styles from "./Login.module.scss";
import Google from "../../assets/login/google.png";
import Facebook from "../../assets/login/facebook.png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
    const [visibility, setVisibility] = useState(false);
    const handleVisibility = () => {
        setVisibility(!visibility);
    }
    return (
        <main className={styles['login-main']}>
            <section className={styles['login-section']}>
                <div className={styles['login-container']}>
                    {/* <div className={styles['login-txt-container']}>
                        <h1>Welcome</h1>
                        <h1>Daily Dashboard</h1>
                    </div> */}
                    <div className={styles['login-form']}>
                        <div className={styles['login-form-container']}>
                            <h1>Welcome</h1>
                            <h1>Daily Dashboard</h1>
                            <form action="">
                                <div className={styles['login-form-email-label']}>
                                    <input type="email" required placeholder='Email Address' />
                                </div>
                                <div className={styles['login-form-pass-label']}>
                                    <input type={visibility ? "text" : "password"} required placeholder='Password' />
                                    {!visibility ?
                                        <VisibilityIcon
                                            style={{ color: "#fff" }}
                                            onClick={handleVisibility} /> :
                                        <VisibilityOffIcon
                                            style={{ color: "#fff" }}
                                            onClick={handleVisibility} />}
                                </div>
                                <div className={styles['login-form-frgt-pass']}>Forgot Password?</div>
                                <button className={styles['login-btn']}>Login</button>
                            </form>
                            <div className={styles['login-form-alternatives']}>
                                <div className={styles['login-form-alt-txt']}>
                                    <div />
                                    <p>Or Login with</p>
                                    <div />
                                </div>
                                <div className={styles['login-form-alt-buttons']}>
                                    <div className={styles['login-form-google']}>
                                        <img src={Google} alt="google" />
                                    </div>
                                    <div className={styles['login-form-facebook']}>
                                        <img src={Facebook} alt="facebook" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['login-form-sign-up']}></div>
                    </div>
                </div>
            </section>
        </main>
    )
}
