import React, { useEffect, useState } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";
import { useMutation } from "@tanstack/react-query";
import "./index.css";
import { Link } from "react-router-dom";
import { login, signup } from "../../Services/ApiServices";
import useAuthStore from "../../Store/useAuthStore";

const Auth = () => {
    const [form, setForm] = useState("login");
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
        phone: "",
        qualification: "none",
        interest: "none",
        confirmpassword: "",
        tc: false,
    });
    const [errors, setErrors] = useState({});

    const setUser = useAuthStore((state) => state.setUser);

    const validateForm = () => {
        const newErrors = {};
        if (form === "login") {
            if (!formData.email) newErrors.email = "Email is required";
            if (!formData.password) newErrors.password = "Password is required";
        } else {
            if (!formData.username) newErrors.username = "Username is required";
            if (!formData.email) newErrors.email = "Email is required";
            if (!formData.phone) newErrors.phone = "Phone is required";
            if (formData.qualification === "none") newErrors.qualification = "Qualification is required";
            if (formData.interest === "none") newErrors.interest = "Interest is required";
            if (!formData.password) newErrors.password = "Password is required";
            if (formData.password !== formData.confirmpassword) newErrors.confirmpassword = "Passwords do not match";
            if (!formData.tc) newErrors.tc = "You must agree to the user agreement and privacy policy";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const loginMutation = useMutation({
        mutationFn: (credentials) => login(credentials.email, credentials.password),
        onSuccess: (data) => {
            console.log("Login successful:", data);
            // Handle successful login
        },
        onError: (error) => {
            console.error("Login failed:", error);
        },
    });

    const signupMutation = useMutation({
        mutationFn: (userData) => signup(userData),
        onSuccess: (data) => {
            console.log("Signup successful:", data);
            // Handle successful signup
        },
        onError: (error) => {
            console.error("Signup failed:", error);
        },
    });

    const handleLogin = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const email = formData.email;
            const password = formData.password;
            loginMutation.mutate({ email, password });
        }
    };

    const handleSignup = (e) => {
        e.preventDefault();
        if (validateForm()) {
            signupMutation.mutate(formData);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
                            <form onSubmit={handleLogin}>
                                <div className="form-item">
                                    <PersonOutlinedIcon className="form-item-icon" />
                                    <input
                                        type="text"
                                        placeholder={errors?.email || "Email"}
                                        name="email"
                                        onChange={handleChange}
                                        className={errors?.email ? "error" : ""}
                                    />
                                </div>
                                <div className="form-item">
                                    <LockOutlinedIcon className="form-item-icon" />
                                    <input
                                        type={!showPassword ? "password" : "text"}
                                        placeholder={errors?.password || "password"}
                                        name="password"
                                        onChange={handleChange}
                                        className={errors?.email ? "error" : ""}
                                    />
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
                            <form onSubmit={handleSignup}>
                                <div className="form-item">
                                    <PersonOutlinedIcon className="form-item-icon" />
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        onChange={handleChange}
                                        className={errors?.email ? "error" : ""}
                                    />
                                </div>

                                <div className="form-item">
                                    <EmailOutlinedIcon className="form-item-icon" />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        onChange={handleChange}
                                        className={errors?.email ? "error" : ""}
                                    />
                                </div>
                                <div className="form-item">
                                    <PhoneOutlinedIcon className="form-item-icon" />
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        name="phone"
                                        onChange={handleChange}
                                        className={errors?.email ? "error" : ""}
                                    />
                                </div>

                                <div className="form-item">
                                    <SchoolOutlinedIcon className="form-item-icon" />
                                    <select
                                        name="qualification"
                                        defaultValue="none"
                                        onChange={handleChange}
                                        className={errors?.email ? "error" : ""}>
                                        <option value="none" disabled>
                                            Select Qualification
                                        </option>
                                        <option value="10th">10th</option>
                                        <option value="Intermedite">Intermedite</option>
                                        <option value="Degree">Degree</option>
                                    </select>
                                </div>

                                <div className="form-item">
                                    <CrisisAlertOutlinedIcon className="form-item-icon" />
                                    <select
                                        name="interest"
                                        defaultValue="none"
                                        onChange={handleChange}
                                        className={errors?.email ? "error" : ""}>
                                        <option value="none" disabled>
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
                                    <input
                                        type={!showPassword ? "password" : "text"}
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleChange}
                                        className={errors?.email ? "error" : ""}
                                    />
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
                                    <input
                                        type={!showPassword ? "password" : "text"}
                                        placeholder="Confirm Password"
                                        name="confirmpassword"
                                        onChange={handleChange}
                                        className={errors?.email ? "error" : ""}
                                    />
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
                                        <input type="checkbox" id="PP" name="tc" onChange={handleChange} />
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
