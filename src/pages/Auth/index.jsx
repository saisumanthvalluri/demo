import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login, signup } from "../../Services/ApiServices";
import loginFormSchema from "../../Schema/loginFormSchema";
import signupFormSchema from "../../Schema/signupFormSchema";
import DynamicInputField from "../../Components/DynamicInputField";
import "./index.css";
import useAuthStore from "../../Store/useAuthStore";
import { toast } from "react-toastify";
import DynamicLoader from "../../Components/DynamicLoader";

const interestOptions = [
    { label: "Select Interest", value: "none", id: 1 },
    { label: "All Jobs", value: "All Jobs", id: 2 },
    { label: "10th Standard", value: "10th", id: 3 },
    { label: "12th /ITI/Diploma", value: "12th", id: 4 },
    { label: "Degree/Graduation", value: "Degree/Graduation", id: 5 },
    { label: "MS/Post-Graduation", value: "MS/Post-Graduation", id: 6 },
    { label: "MBA", value: "MBA", id: 7 },
    { label: "PhD", value: "PhD", id: 8 },
];

const qualificationOptions = [
    { label: "Select Qualification", value: "none", id: 1 },
    { label: "All Jobs", value: "All Jobs", id: 2 },
    { label: "10th Standard", value: "10th", id: 3 },
    { label: "12th /ITI/Diploma", value: "12th", id: 4 },
    { label: "Degree/Graduation", value: "Degree/Graduation", id: 5 },
    { label: "MS/Post-Graduation", value: "MS/Post-Graduation", id: 6 },
    { label: "MBA", value: "MBA", id: 7 },
    { label: "PhD", value: "PhD", id: 8 },
];

const Auth = () => {
    const [form, setForm] = useState("login");
    const [showPassword, setShowPassword] = useState(false);
    // const [errors, setErrors] = useState({ login: "", signUp: "" });

    const { setUser } = useAuthStore();

    const navigate = useNavigate();
    const errorAudio = new Audio("/error-tone.mp3");

    // Login form setup
    const {
        register: loginRegister,
        handleSubmit: handleLoginSubmit,
        formState: { errors: loginErrors },
    } = useForm({
        resolver: zodResolver(loginFormSchema),
    });

    // Signup form setup
    const {
        register: signupRegister,
        handleSubmit: handleSignupSubmit,
        formState: { errors: signupErrors },
    } = useForm({
        resolver: zodResolver(signupFormSchema),
    });

    const loginMutation = useMutation({
        mutationFn: (credentials) => login(credentials.email, credentials.password),
        onSuccess: (data) => {
            console.log("Login successful:", data);
            // Handle successful login
            setUser(data);
            navigate("/jobs");
        },
        onError: (error) => {
            // setErrors((prevErrors) => ({ ...prevErrors, login: error.response.data }));
            toast.error(error.response.data);
            errorAudio.play();
        },
    });

    const signupMutation = useMutation({
        mutationFn: (userData) => signup(userData),
        onSuccess: (data) => {
            console.log("Signup successful:", data);
            // Handle successful signup
            setUser(data);
            navigate("/jobs");
        },
        onError: (error) => {
            // setErrors((prevErrors) => ({ ...prevErrors, signUp: error.response.data }));
            toast.error(error.response.data);
            errorAudio.play();
        },
    });

    const handleLogin = handleLoginSubmit((data) => {
        loginMutation.mutate(data);
    });

    const handleSignup = handleSignupSubmit((data) => {
        signupMutation.mutate(data);
    });

    return (
        <div className="auth-bg">
            <div className="inner">
                <div className="left">
                    <h2>Welcome to the {form === "login" ? "Login" : "Sign Up"} Page!</h2>
                    {form === "signup" && (
                        <p>
                            To achieve your goals, set specific targets, create a plan with actionable steps, and stay
                            committed through perseverance and adaptability. Consistent effort and a positive mindset
                            will propel you towards success.
                        </p>
                    )}
                    <img src={form === "login" ? "/auth/Login.svg" : "/auth/signup.svg"} alt={form} />
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
                                <DynamicInputField
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    register={loginRegister}
                                    error={loginErrors?.email}
                                />
                            </div>
                            <div className="form-item">
                                <LockOutlinedIcon className="form-item-icon" />
                                <DynamicInputField
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    register={loginRegister}
                                    error={loginErrors?.password}
                                />
                                {showPassword ? (
                                    <VisibilityOutlinedIcon
                                        className="eye-icon"
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <VisibilityOffOutlinedIcon
                                        className="eye-icon"
                                        onClick={() => setShowPassword(true)}
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
                            {/* {errors.login !== "" && <span className="err-msg text-center">{errors?.login}</span>} */}
                            <button type="submit" disabled={loginMutation.isPending}>
                                {loginMutation.isPending
                                    ? DynamicLoader("RotatingLines", 20, 20, "#fff", true)
                                    : "Login"}
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleSignup}>
                            <div className="form-item">
                                <PersonOutlinedIcon className="form-item-icon" />
                                <DynamicInputField
                                    type="text"
                                    name="userName"
                                    placeholder="user Name"
                                    register={signupRegister}
                                    error={signupErrors?.userName}
                                />
                            </div>
                            <div className="form-item">
                                <EmailOutlinedIcon className="form-item-icon" />
                                <DynamicInputField
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    register={signupRegister}
                                    error={signupErrors?.email}
                                />
                            </div>
                            <div className="form-item">
                                <PhoneOutlinedIcon className="form-item-icon" />
                                <DynamicInputField
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Phone"
                                    register={signupRegister}
                                    error={signupErrors?.phoneNumber}
                                />
                            </div>
                            <div className="form-item">
                                <SchoolOutlinedIcon className="form-item-icon" />
                                <DynamicInputField
                                    type="select"
                                    name="qualification"
                                    register={signupRegister}
                                    error={signupErrors?.qualification}
                                    options={qualificationOptions}
                                />
                            </div>
                            <div className="form-item">
                                <CrisisAlertOutlinedIcon className="form-item-icon" />
                                <DynamicInputField
                                    type="select"
                                    name="interest"
                                    register={signupRegister}
                                    error={signupErrors?.interest}
                                    options={interestOptions}
                                />
                            </div>
                            <div className="form-item">
                                <LockOutlinedIcon className="form-item-icon" />
                                <DynamicInputField
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    register={signupRegister}
                                    error={signupErrors?.password}
                                />
                                {showPassword ? (
                                    <VisibilityOutlinedIcon
                                        className="eye-icon"
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <VisibilityOffOutlinedIcon
                                        className="eye-icon"
                                        onClick={() => setShowPassword(true)}
                                    />
                                )}
                            </div>
                            <div className="form-item">
                                <LockOutlinedIcon className="form-item-icon" />
                                <DynamicInputField
                                    type={showPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    register={signupRegister}
                                    error={signupErrors?.confirmPassword}
                                />
                                {showPassword ? (
                                    <VisibilityOutlinedIcon
                                        className="eye-icon"
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <VisibilityOffOutlinedIcon
                                        className="eye-icon"
                                        onClick={() => setShowPassword(true)}
                                    />
                                )}
                            </div>
                            <div className="form-item">
                                <div className="rem-box">
                                    <input type="checkbox" id="PP" name="tc" {...signupRegister("tc")} />
                                    <label htmlFor="PP">I agree to the user agreement and privacy policy</label>
                                </div>
                            </div>
                            {signupErrors?.tc && <p className="err-msg">{signupErrors.tc.message}</p>}
                            {/* {errors.signUp !== "" && <span className="err-msg text-center">{errors?.signUp}</span>} */}
                            <button type="submit" disabled={signupMutation.isPending}>
                                {signupMutation.isPending
                                    ? DynamicLoader("RotatingLines", 20, 20, "#fff", true)
                                    : "Sign Up"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Auth;
