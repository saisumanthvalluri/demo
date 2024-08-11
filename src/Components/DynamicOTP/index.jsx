import React, { useState, useRef } from "react";
import "./index.css";

const OTP_LENGTH = 6; // Define the length of the OTP

const DynamicOTP = () => {
	const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
	const inputRefs = useRef([]);

	const handleChange = (e, index) => {
		const { value } = e.target;

		// Ensure the input is a single digit number
		if (/^[0-9]?$/.test(value)) {
			const newOtp = [...otp];
			newOtp[index] = value;
			setOtp(newOtp);

			// Focus the next input field if a digit is entered
			if (value && index < OTP_LENGTH - 1) {
				inputRefs.current[index + 1].focus();
			}
		}
	};

	const handleKeyDown = (e, index) => {
		if (e.key === "Backspace" && index > 0 && otp[index] === "") {
			inputRefs.current[index - 1].focus();
		}
	};

	const handlePaste = (e, index) => {
		e.preventDefault();
		const pastedData = e.clipboardData
			.getData("text")
			.slice(0, OTP_LENGTH - index);

		if (/^\d*$/.test(pastedData)) {
			const newOtp = [...otp];
			for (let i = 0; i < pastedData.length; i++) {
				newOtp[index + i] = pastedData[i];
			}
			setOtp(newOtp);

			// Focus the last field that was updated
			if (index + pastedData.length < OTP_LENGTH) {
				inputRefs.current[index + pastedData.length].focus();
			}
		}
	};

	return (
		<div className="otp-container">
			<div className="input-box">
				{otp.map((value, index) => (
					<input
						key={index}
						type="text"
						maxLength="1"
						value={value}
						placeholder="0"
						onChange={(e) => handleChange(e, index)}
						onKeyDown={(e) => handleKeyDown(e, index)}
						onPaste={(e) => handlePaste(e, index)}
						ref={(el) => (inputRefs.current[index] = el)}
						className="otp-input"
					/>
				))}
			</div>
			<button>Verify</button>
		</div>
	);
};

export default DynamicOTP;
