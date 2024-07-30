import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./index.css";

const Footer = () => {
    return (
        <div className="footer-bg">
            <div className="inner_1">
                <div className="list_1">
                    <h2>Logo</h2>
                    <p>
                        {/* Government jobs are a top choice for Indian youth due to their security, good salaries, perks,
                        and the chance to serve the nation. */}
                        Government jobs are a top choice for Indian youth due to their security, good salaries, perks,
                        and the chance to serve the nation. They are accessible to candidates with qualifications
                        ranging from 8th-grade education to doctoral degrees, providing opportunities for all.
                    </p>
                </div>
                <div className="list">
                    <span>Company</span>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>FAQ's</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="list">
                    <span>Terms</span>
                    <ul>
                        <li>Terms And Conditions</li>
                        <li>Terms of acceptable usage</li>
                        <li>Privacy policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
                <div className="list">
                    <span>Contact Us</span>
                    <ul>
                        <li>
                            <PhoneInTalkIcon className="contact-icon" /> <p>+91-123-456-7890</p>
                        </li>
                        <li>
                            <EmailIcon className="contact-icon" /> <p>123@example.com</p>
                        </li>
                        <li>
                            <LocationOnIcon className="contact-icon" /> <p>123 Main Street, City, State, Zip</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="inner_2">
                <div className="social-media">
                    <span>Follow Us</span>
                    <div className="icons">
                        <InstagramIcon />
                        <XIcon />
                        <LinkedInIcon />
                        <YouTubeIcon />
                    </div>
                </div>

                <div className="stay-connect">
                    <span>Stay Connected</span>
                    <p>Sign up for our newsletter and be the first to hear about Offers, updates, and tips</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email address" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr />
            <p className="copy-right">@ 2024 | All Rights Reserved</p>
        </div>
    );
};

export default Footer;
