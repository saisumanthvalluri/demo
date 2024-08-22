import React from "react";
import "./index.css";
import DynamicHeader from "../../Components/DynamicHeader";

const NotFound = () => {
    return (
        <>
            <DynamicHeader type="outer" />
            <div className="not-found-container">
                <img src="/not-found.svg" alt="Not Found" className="not-found-image" />
                <div>
                    <h1>404</h1>
                    <p>Page Not Found</p>
                </div>
            </div>
        </>
    );
};

export default NotFound;

// signup Form fields

const signupFields = [
    {
        label: "User Name",
        type: "text",
        name: "userName",
        required: true,
        placeholder: "Enter your User Name",
    },
    {
        label: "Email Address",
        type: "email",
        name: "email",
        required: true,
        placeholder: "Enter your email address",
    },
    {
        label: "Phone Number",
        type: "tel",
        name: "phoneNumber",
        required: true,
        placeholder: "Enter your phone number",
    },
    {
        label: "Select Qualification",
        type: "select",
        name: "qualification",
        required: true,
    },
    {
        label: "Select Interest",
        type: "select",
        name: "interest",
        required: true,
    },
    {
        label: "Password",
        type: "password",
        name: "password",
        required: true,
        placeholder: "Enter your password",
    },
    {
        label: "Confirm Password",
        type: "password",
        name: "confirmPassword",
        required: true,
        placeholder: "Confirm your password",
    },

    {
        label: "Tearms and Conditions",
        type: "checkbox",
        name: "tc",
        required: true,
    },
];

// login Form fields

const loginFields = [
    {
        label: "Email Address",
        type: "email",
        name: "email",
        required: true,
        placeholder: "Enter your email address",
    },
    {
        label: "Password",
        type: "password",
        name: "password",
        required: true,
        placeholder: "Enter your password",
    },
];
