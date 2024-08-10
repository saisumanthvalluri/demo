import React, { useState } from "react";
import "./index.css";

const DeleteAccountFileds = [
    {
        step: 1,
        fileds: [
            {
                label: "Deactivate my account",
                span: "Deactivating Account is temporary. Your Account will be disable",
                value: "DEACTIVATE",
                id: "DEACTIVATE",
            },
            {
                label: "Delete my account",
                span: `When You delete your account, All Your Information will be deleted Permanently and you won’t
                            get Any Job Notifications....`,
                value: "DELETE",
                id: "DELETE",
            },
        ],
    },
    {
        step: 2,
        fileds: [
            {
                label: "Too many ads",
                name: "why_delete",
                type: "radio",
                value: "Too many ads",
                id: "too_many_ads",
            },
            {
                label: "Trouble getting started",
                name: "why_delete",
                type: "radio",
                value: "Trouble getting started",
                id: "trouble_getting_started",
            },
            {
                label: "Privacy Concerns",
                name: "why_delete",
                type: "radio",
                value: "Privacy concerns",
                id: "privacy_concerns",
            },
            {
                label: "Concerned about my Data",
                name: "why_delete",
                type: "radio",
                value: "Concerned about my data",
                id: "concerned_about_my_data",
            },
            {
                label: "Created Second Account",
                name: "why_delete",
                type: "radio",
                value: "Created second account",
                id: "created_second_account",
            },
            {
                label: "Too busy/distracting",
                name: "why_delete",
                type: "radio",
                value: "Too busy distracting",
                id: "too_busy_distracting",
            },
            {
                label: "Can’t find people to follow",
                name: "why_delete",
                type: "radio",
                value: "Can't find people to follow",
                id: "can't_find_people_to_follow",
            },
            {
                label: "Something else",
                name: "why_delete",
                type: "radio",
                value: "something_else",
                id: "something_else",
            },
            {
                type: "textArea",
                label: "Tell us more about why you're deleting your account",
                name: "why_delete_description",
                id: "why_delete",
                placeholder: "Write your answer here",
                reqVal: "something_else",
            },
        ],
    },
];

const DeleteAccount = () => {
    const [formData, setFormData] = useState({});
    const [step, setStep] = useState(1);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const renderStepOne = () => {
        return (
            <>
                <h1>Delete Account?</h1>
                <span className="capt">Delete your account will removed all personal data!</span>
                <img src="/profile/profile-photo.svg" alt="profile" />
                <strong>Before You Go...</strong>

                {DeleteAccountFileds[0].fileds.map((item) => (
                    <label key={item.id} className="acc-action-label">
                        <input
                            type="radio"
                            name="acc_action"
                            id={item.id}
                            value={item.value}
                            onChange={handleChange}
                            checked={formData.acc_action === item.value}
                        />
                        <div>
                            {item.label} <br />
                            <span>{item.span}</span>
                        </div>
                    </label>
                ))}
                <button className="conf-btn" onClick={() => setStep((prev) => prev + 1)}>
                    Confirm
                </button>
            </>
        );
    };

    const renderStepTwo = () => {
        return (
            <>
                <h1>Deleting Your Account</h1>
                <p className="question">
                    We’ re sorry to see you go. We ‘d like to know why you ‘re deleting your account as we may be able
                    to help with common issues.
                </p>
                <ul>
                    {DeleteAccountFileds[1].fileds.map((item) =>
                        item.type === "radio" ? (
                            <li key={item.id}>
                                <input
                                    type={item.type}
                                    name={item.name}
                                    id={item.id}
                                    value={item.value}
                                    checked={formData[item.name] === item.value}
                                    onChange={handleChange}
                                />
                                <label htmlFor={item.id}>{item.label}</label>
                            </li>
                        ) : (
                            formData?.why_delete === item.reqVal && (
                                <textarea
                                    key={item.id}
                                    rows={3}
                                    name={item.name}
                                    id={item.id}
                                    placeholder={item.label}
                                    onChange={handleChange}></textarea>
                            )
                        )
                    )}
                </ul>
                <div className="atn-btn-box">
                    <button>Continue</button>
                    <button className="cnl-btn" onClick={() => setStep((prev) => prev - 1)}>
                        Cancel
                    </button>
                </div>
            </>
        );
    };

    return (
        <div className="del-acc-bg">
            <hr />
            {step === 1 ? renderStepOne() : renderStepTwo()}
        </div>
    );
};

export default DeleteAccount;
