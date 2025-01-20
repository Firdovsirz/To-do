import React, { useState } from 'react';
import styles from "./Login.module.scss";
import ToDo from "../../assets/login/todo.png";
import Google from "../../assets/login/google.png";
import Facebook from "../../assets/login/facebook.png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ReactCardFlip from 'react-card-flip';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
    const [visibility, setVisibility] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const handleVisibility = () => {
        setVisibility(!visibility);
    }
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }
    return (
        <main className={styles['login-main']}>
            <ReactCardFlip flipDirection={"horizontal"} isFlipped={isFlipped}>
                <section className={styles['login-section']}>
                    <div className={styles['login-container']}>
                        <div className={styles['login-form-container']}>
                            <div className={styles['login-form-txt']}>
                                <img src={ToDo} alt="" />
                                <h1>Welcome to</h1>
                                <h1>Daily Dashboard</h1>
                            </div>
                            <div className={styles['login-form']}>
                                <form action="">
                                    <label htmlFor="username">
                                        <input type="text" required placeholder='Username or Email' />
                                    </label>
                                    <label htmlFor="password">
                                        <input type={visibility ? "text" : "password"} required placeholder='Password' />
                                        {!visibility ?
                                            <VisibilityIcon
                                                onClick={handleVisibility}
                                                style={{ color: "rgb(90, 154, 215)", cursor: "pointer" }} /> :
                                            <VisibilityOffIcon
                                                onClick={handleVisibility}
                                                style={{ color: "rgb(90, 154, 215)", cursor: "pointer" }}
                                            />}
                                    </label>
                                    <p className={styles['login-form-frgt-pass']}>Forgot password?</p>
                                    <button>Log In</button>
                                </form>
                                <div className={styles['login-alt-txt']}>
                                    <div className={styles['login-alt-line']} />
                                    <p>Or Login With</p>
                                    <div className={styles['login-alt-line']} />
                                </div>
                            </div>
                            <div className={styles['login-alt-container']}>
                                <div className={styles['login-alt-google']}>
                                    <img src={Google} alt="google" />
                                </div>
                                <div className={styles['login-alt-facebook']}>
                                    <img src={Facebook} alt="facebook" />
                                </div>
                            </div>
                        </div>
                        <div className={styles['login-sign-up-btn-container']} onClick={handleFlip}>
                            <p>
                                Don't have an account? <span>Sign Up Now</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section className={styles['register-section']}>
                    <div className={styles['register-container']}>
                        <div className={styles['register-form-container']}>
                            <div className={styles['register-form-txt']}>
                                <img src={ToDo} alt="" />
                                <h1>Welcome to</h1>
                                <h1>Daily Dashboard</h1>
                            </div>
                            <div className={styles['register-form']}>
                                <form action="">
                                    <label htmlFor="username">
                                        <input type="text" required placeholder='Username or Email' />
                                    </label>
                                    <label htmlFor="password">
                                        <input type={visibility ? "text" : "password"} required placeholder='Password' />
                                        {!visibility ?
                                            <VisibilityIcon
                                                onClick={handleVisibility}
                                                style={{ color: "rgb(90, 154, 215)", cursor: "pointer" }} /> :
                                            <VisibilityOffIcon
                                                onClick={handleVisibility}
                                                style={{ color: "rgb(90, 154, 215)", cursor: "pointer" }}
                                            />}
                                    </label>
                                    <p className={styles['register-form-frgt-pass']}>Forgot password?</p>
                                    <button>Log In</button>
                                </form>
                                <div className={styles['register-alt-txt']}>
                                    <div className={styles['register-alt-line']} />
                                    <p>Or register With</p>
                                    <div className={styles['register-alt-line']} />
                                </div>
                            </div>
                            <div className={styles['register-alt-container']}>
                                <div className={styles['register-alt-google']}>
                                    <img src={Google} alt="google" />
                                </div>
                                <div className={styles['register-alt-facebook']}>
                                    <img src={Facebook} alt="facebook" />
                                </div>
                            </div>
                        </div>
                        <div className={styles['register-sign-up-btn-container']} onClick={handleFlip}>
                            <p>
                                Already have an account? <span>Log In Now</span>
                            </p>
                        </div>
                    </div>
                </section>
            </ReactCardFlip>
        </main>
    )
}
