import React, { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import "./index.css";
import "../index.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import forgotPasswordFormSchema from "../../../Schema/forgotPasswordFormSchema";
import DynamicInputField from "../../../Components/DynamicInputField";

const ForgotPassword = () => {
    const [sentLink, setSentLink] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(forgotPasswordFormSchema),
    });

    // const handleSendLink = (e) => {
    //     e.preventDefault();
    //     setSentLink(true); // Simulate sending email link
    //     setTimeout(() => {
    //         setSentLink(false);
    //     }, 3000); // Reset after 3 seconds
    // };

    const handleSendLink = handleSubmit((data) => {
        console.log(data);
        // Simulate sending email link
        setSentLink(true);
        setTimeout(() => {
            setSentLink(false);
        }, 3000); // Reset after 3 seconds
    });
    return (
        <div className="auth-bg">
            <div className="inner">
                <div className="left">
                    <h2>Welcome to the Forgot Password Page!</h2>

                    <img src="/auth/forgot_pass.svg" alt="login" />
                </div>
                <div className="right">
                    <h4 className="form-title">Forgot Password</h4>
                    <p className="form-desc">You will receive a password reset link on your email</p>

                    <form onSubmit={(e) => handleSendLink(e)}>
                        <div className="form-item">
                            <EmailOutlinedIcon className="form-item-icon" />
                            {/* <input type="email" placeholder="Enter your email" required /> */}
                            <DynamicInputField
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                register={register}
                                error={errors?.email}
                            />
                        </div>
                        {sentLink ? (
                            <div className="success-msg-box">
                                <MarkEmailReadIcon className="icon" />
                                <p>
                                    Check your email for the password reset link. If you don't find it, please check
                                    your spam folder.
                                </p>
                            </div>
                        ) : (
                            <button type="submit">Send Reset Link</button>
                        )}

                        <Link to="/auth" className="back-login">
                            <span>&#60; Back to Login</span>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
