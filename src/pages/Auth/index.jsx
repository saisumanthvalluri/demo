import React, { useState } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";
import "./index.css";
import { Link } from "react-router-dom";

const Auth = () => {
    const [form, setForm] = useState("login");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            {/* <OuterNav /> */}
            <div className="auth-bg">
                <div className="inner">
                    <div className="left">
                        <h2>Welcome to the {form === "login" ? "Login" : "Sign Up"} Page!</h2>
                        {form === "signup" && (
                            <p>
                                To achieve your goals, set specific targets, create a plan with actionable steps, and
                                stay committed through perseverance and adaptability. Consistent effort and a positive
                                mindset will propel you towards success.
                            </p>
                        )}
                        <img src={form === "login" ? "/auth/Login.svg" : "/auth/signup.svg"} alt="login" />
                    </div>
                    <div className="right">
                        <div className="tabs">
                            <button onClick={() => setForm("login")} className={form === "login" ? "active" : ""}>
                                Login
                            </button>
                            <button onClick={() => setForm("signup")} className={form === "signup" ? "active" : ""}>
                                Sign Up
                            </button>
                        </div>
                        {form === "login" ? (
                            <form>
                                <div className="form-item">
                                    <PersonOutlinedIcon className="form-item-icon" />
                                    <input type="text" placeholder="Email" />
                                </div>
                                <div className="form-item">
                                    <LockOutlinedIcon className="form-item-icon" />
                                    <input type={!showPassword ? "password" : "text"} placeholder="Password" />
                                    {!showPassword ? (
                                        <VisibilityOffOutlinedIcon
                                            className="eye-icon"
                                            onClick={() => setShowPassword(true)}
                                        />
                                    ) : (
                                        <VisibilityOutlinedIcon
                                            className="eye-icon"
                                            onClick={() => setShowPassword(false)}
                                        />
                                    )}
                                </div>
                                <div className="form-item">
                                    <div className="rem-box">
                                        <input type="checkbox" id="rememberMe" />
                                        <label htmlFor="rememberMe">Remember Me</label>
                                    </div>
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </div>
                                <button type="submit">Login</button>
                            </form>
                        ) : (
                            <form>
                                <div className="form-item">
                                    <PersonOutlinedIcon className="form-item-icon" />
                                    <input type="text" placeholder="Username" />
                                </div>

                                <div className="form-item">
                                    <EmailOutlinedIcon className="form-item-icon" />
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="form-item">
                                    <PhoneOutlinedIcon className="form-item-icon" />
                                    <input type="tel" placeholder="Phone" />
                                </div>

                                <div className="form-item">
                                    <SchoolOutlinedIcon className="form-item-icon" />
                                    <select>
                                        <option value="" disabled selected>
                                            Select Qualification
                                        </option>
                                        <option value="10th">10th</option>
                                        <option value="Intermedite">Intermedite</option>
                                        <option value="Degree">Degree</option>
                                    </select>
                                </div>

                                <div className="form-item">
                                    <CrisisAlertOutlinedIcon className="form-item-icon" />
                                    <select>
                                        <option value="" disabled selected>
                                            Select Intrest
                                        </option>
                                        <option value="10th">All Jobs</option>
                                        <option value="Intermedite">10th Standard</option>
                                        <option value="Degree">12th /ITI/Diploma</option>
                                        <option value="Degree">Degree/Graduation</option>
                                        <option value="Degree">MS/Post-Graduation</option>
                                        <option value="Degree">MBA</option>
                                        <option value="Degree">PhD</option>
                                    </select>
                                </div>

                                <div className="form-item">
                                    <LockOutlinedIcon className="form-item-icon" />
                                    <input type={!showPassword ? "password" : "text"} placeholder="Password" />
                                    {!showPassword ? (
                                        <VisibilityOffOutlinedIcon
                                            className="eye-icon"
                                            onClick={() => setShowPassword(true)}
                                        />
                                    ) : (
                                        <VisibilityOutlinedIcon
                                            className="eye-icon"
                                            onClick={() => setShowPassword(false)}
                                        />
                                    )}
                                </div>
                                <div className="form-item">
                                    <LockOutlinedIcon className="form-item-icon" />
                                    <input type={!showPassword ? "password" : "text"} placeholder="Confirm Password" />
                                    {!showPassword ? (
                                        <VisibilityOffOutlinedIcon
                                            className="eye-icon"
                                            onClick={() => setShowPassword(true)}
                                        />
                                    ) : (
                                        <VisibilityOutlinedIcon
                                            className="eye-icon"
                                            onClick={() => setShowPassword(false)}
                                        />
                                    )}
                                </div>
                                <div className="form-item">
                                    <div className="rem-box">
                                        <input type="checkbox" id="PP" />
                                        <label htmlFor="PP">I agree to the user agreement and privacy policy</label>
                                    </div>
                                </div>

                                <button type="submit">Sign Up</button>
                                {/* <span className="back-login" onClick={() => setForm("login")}>
                                    Already have an account? Sign in now.
                                </span> */}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Auth;
