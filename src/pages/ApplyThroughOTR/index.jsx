import React, { useState } from "react";
import { FaWpforms } from "react-icons/fa";
import DynamicForm from "../../Components/DynamicForm";
import DynamicHeader from "../../Components/DynamicHeader";
import Footer from "../../Components/Footer";
import "./index.css";
import useApplicationStore from "../../Store/useApplicationStore";
import { applyThroughOTRFields } from "../../Config/constants";
import Captcha from "../../Components/Captcha";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import applyThroughOTRSchema from "../../Schema/applyThroughOTRSchema";

const ApplyThroughOTR = () => {
    const { selectedJob } = useApplicationStore();
    const navigate = useNavigate();
    const [captcha, setCaptcha] = useState({ userCaptcha: "", genCaptcha: "", errMsg: "" });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(applyThroughOTRSchema),
    });

    const handleNext = () => {
        if (captcha.userCaptcha === captcha.genCaptcha) {
            // Redirect to payment page
            setCaptcha({ ...captcha, errMsg: "" });
            // navigate("/payment-details");
            onSubmit();
        } else {
            setCaptcha({ ...captcha, errMsg: "Invalid Captcha!" });
        }
    };

    const handleBack = () => {
        // Redirect to job details page
        navigate(-1);
    };

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        // Simulate submitting application form
        // navigate("/apply-success");
    });

    return (
        <>
            <DynamicHeader type="inner" />
            <div className="apy-t-otr-bg">
                <div className="inner">
                    <h2>{selectedJob?.title}</h2>
                    <p className="sub-text">
                        <span className="sub-head">POST NAME: </span>
                        {selectedJob?.company}
                    </p>
                    <span className="sub-head">Apply Through OTR:</span>
                    <div className="otr-sel-btn-box">
                        <FaWpforms className="icon" />
                        <button onClick={() => navigate("/otr")}>OTR Form</button>
                        <input type="radio" name="" id="" defaultChecked />
                    </div>
                    <h3>OTR form Completed successfully</h3>
                    <form>
                        <DynamicForm fields={applyThroughOTRFields} register={register} errors={errors} />
                    </form>
                    <Captcha setCaptcha={setCaptcha} captcha={captcha} />
                    <div className="nxt-prev-btn-box">
                        <button type="button" onClick={handleBack}>
                            Back
                        </button>
                        <button type="button" className="next" onClick={handleNext}>
                            Next
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default ApplyThroughOTR;
