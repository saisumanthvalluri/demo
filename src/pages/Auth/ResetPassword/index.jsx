import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "./index.css";
import "../index.css";
import { Link } from "react-router-dom";

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="auth-bg">
            <div className="inner">
                <div className="left">
                    <h2>Welcome to the Reset Password Page!</h2>

                    <img src="/auth/forgot_pass.svg" alt="login" />
                </div>
                <div className="right">
                    <h4 className="form-title">Reset Password</h4>
                    <p className="form-desc">Reset your Password!</p>

                    <form>
                        <div className="form-item">
                            <EmailOutlinedIcon className="form-item-icon" />
                            <input type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-item">
                            <LockOutlinedIcon className="form-item-icon" />
                            <input type={!showPassword ? "password" : "text"} placeholder="New Password" />
                            {!showPassword ? (
                                <VisibilityOffOutlinedIcon className="eye-icon" onClick={() => setShowPassword(true)} />
                            ) : (
                                <VisibilityOutlinedIcon className="eye-icon" onClick={() => setShowPassword(false)} />
                            )}
                        </div>
                        <div className="form-item">
                            <LockOutlinedIcon className="form-item-icon" />
                            <input type={!showPassword ? "password" : "text"} placeholder="Confirm Password" />
                            {!showPassword ? (
                                <VisibilityOffOutlinedIcon className="eye-icon" onClick={() => setShowPassword(true)} />
                            ) : (
                                <VisibilityOutlinedIcon className="eye-icon" onClick={() => setShowPassword(false)} />
                            )}
                        </div>
                        
                        <button type="submit">Reset My Password</button>
                        <Link to="/auth" className="back-login">
                            <span>&#60; Back to Login</span>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
