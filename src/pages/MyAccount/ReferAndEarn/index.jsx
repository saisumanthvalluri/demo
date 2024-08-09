import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoShareSocialSharp, IoChevronBack } from "react-icons/io5";
import "./index.css";

const ReferAndEarn = ({ back }) => {
    return (
        <div className="rae-bg">
            {back && (
                <button onClick={back} className="back-btn">
                    <IoChevronBack /> Back
                </button>
            )}
            <div className="banner">
                <strong>Refer and Earn</strong>
                <img src="/profile/refer-earn/refer-and-earn.svg" alt="refer and earn" />
                <strong>Send a Referral Link to your Friend</strong>
            </div>
            <div className="sign-up-banner">
                <div className="step-title">
                    <span>Your friend SIGNS UP</span>
                </div>
                <div className="avt-earn-amt-box">
                    <div className="item">
                        <img src="profile/refer-earn/re-boy.svg" alt="boy" />
                        <div className="amt-box">
                            <span>You get</span>
                            <span>RS. 2</span>
                        </div>
                    </div>
                    <div className="item">
                        <img src="profile/refer-earn/re-girl.svg" alt="girl" />
                        <div className="amt-box">
                            <span>You get</span>
                            <span>RS. 2</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="first-apply-banner">
                <div className="step-title">
                    <span>When Your friend completes first apply</span>
                </div>
                <div className="item">
                    <img src="profile/refer-earn/re-girl.svg" alt="girl" />
                    <div className="amt-box">
                        <span>You get ADDITIONAL amount of Rs.20</span>
                    </div>
                </div>
            </div>
            <button className="see-who-btn">SEE WHO'S AN APP</button>
            <div className="ref-via-box">
                <strong>Refer VIA</strong>
                <ul>
                    <li>
                        <img src="/whats-app-icon.svg" alt="whatsapp" />
                        <span>Whatsapp</span>
                    </li>
                    <li>
                        <img src="/twitter-icon.svg" alt="twitter" />
                        <span>Twitter</span>
                    </li>
                    <li>
                        <img src="/instagram-icon.svg" alt="instragram" />
                        <span>Instagram</span>
                    </li>
                    <li>
                        <img src="/facebook-icon.svg" alt="facebook" />
                        <span>Facebook</span>
                    </li>
                </ul>
            </div>
            <div className="ref-code-box">
                <span>
                    Your Referral Code: <strong>ABC123</strong>
                </span>
                <div>
                    <FaRegCopy />
                    <IoShareSocialSharp />
                </div>
            </div>
        </div>
    );
};

export default ReferAndEarn;
