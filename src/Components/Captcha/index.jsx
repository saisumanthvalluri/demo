// src/components/Captcha.js

import React, { useEffect } from "react";
import "./index.css";

const Captcha = ({ captcha, setCaptcha }) => {
    useEffect(() => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let captchaText = "";
        for (let i = 0; i < 6; i++) {
            captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setCaptcha((prev) => ({ ...prev, genCaptcha: captchaText, userCaptcha: "" }));
    }, [setCaptcha]);

    const generateCaptcha = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let captchaText = "";
        for (let i = 0; i < 6; i++) {
            captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setCaptcha((prev) => ({ ...prev, genCaptcha: captchaText, userCaptcha: "" }));
    };

    return (
        <div className="captcha-container">
            <div className="captcha-box">
                <div className="captcha-text">{captcha?.genCaptcha}</div>
                <button onClick={generateCaptcha} className="refresh-button">
                    Refresh
                </button>
            </div>
            <input
                type="text"
                value={captcha?.userCaptcha}
                onChange={(e) => setCaptcha((prev) => ({ ...prev, userCaptcha: e.target.value }))}
                placeholder="Enter Captcha"
                className={captcha.errMsg !== "" ? "captcha-input error" : "captcha-input"}
                maxLength={6}
            />
            {captcha.errMsg && <p className="err-msg">{captcha.errMsg}</p>}
            {/* <button onClick={verifyCaptcha} className="verify-button">
                Verify
            </button> */}
            {/* {isVerified && <div className="success-message">Captcha Verified!</div>} */}
        </div>
    );
};

export default Captcha;
