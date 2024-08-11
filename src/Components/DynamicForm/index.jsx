import React, { useEffect, useState, useCallback } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import debounce from "lodash.debounce";
import DynamicOTP from "../DynamicOTP";
import "./index.css";

const DynamicForm = ({ fields }) => {
	const [formData, setFormData] = useState({});
	const [showPassword, setShowPassword] = useState(false);

	useEffect(() => {
		const savedFormData = JSON.parse(localStorage.getItem("formData"));
		if (savedFormData) {
			setFormData(savedFormData);
		}
	}, []);

	// useEffect(() => {
	//     const savedFormData = JSON.parse(localStorage.getItem("formData"));
	//     if (savedFormData) {
	//         const updatedFormData = { ...savedFormData };
	//         for (const key in savedFormData) {
	//             const field = findFieldByName(fields, key);
	//             if (field && field.type === "file" && savedFormData[key]) {
	//                 updatedFormData[key] = base64ToFile(savedFormData[key], key);
	//             }
	//         }
	//         setFormData(updatedFormData);
	//     }
	// }, []);

	// const fileToBase64 = (file) => {
	//     return new Promise((resolve, reject) => {
	//         const reader = new FileReader();
	//         reader.readAsDataURL(file);
	//         reader.onload = () => resolve(reader.result);
	//         reader.onerror = (error) => reject(error);
	//     });
	// };

	// const base64ToFile = (base64, filename) => {
	//     const arr = base64.split(",");
	//     const mime = arr[0].match(/:(.*?);/)[1];
	//     const bstr = atob(arr[1]);
	//     let n = bstr.length;
	//     const u8arr = new Uint8Array(n);
	//     while (n--) {
	//         u8arr[n] = bstr.charCodeAt(n);
	//     }
	//     return new File([u8arr], filename, { type: mime });
	// };

	const debouncedSave = useCallback(
		debounce((data) => {
			localStorage.setItem("formData", JSON.stringify(data));
		}, 300),
		[]
	);

	const clearSubFields = (subFields, newFormData) => {
		subFields.forEach((subField) => {
			delete newFormData[subField.name];
			if (subField.subFields) {
				clearSubFields(subField.subFields, newFormData);
			}
		});
	};

	const handleChange = (e, notReqVal) => {
		const { name, value } = e.target;

		setFormData((prevFormData) => {
			const newFormData = { ...prevFormData, [name]: value };

			const field = findFieldByName(fields, name);

			if (field?.subFields && value === notReqVal) {
				clearSubFields(field.subFields, newFormData);
			}

			debouncedSave(newFormData);
			return newFormData;
		});
	};

	const handleChangeFile = (e) => {
		const obj = {
			target: {
				name: e.target.name,
				value: e.target.files[0],
			},
		};

		handleChange(obj);
	};

	const handleChangeCheckBox = (e) => {
		const { name, checked } = e.target;
		const obj = {
			target: {
				name,
				value: checked,
			},
		};
		handleChange(obj);
	};

	// const handleChangeFile = async (e) => {
	//     const { name, files } = e.target;
	//     const file = files[0];
	//     const base64File = await fileToBase64(file);

	//     const obj = {
	//         target: {
	//             name,
	//             value: base64File,
	//         },
	//     };

	//     handleChange(obj);
	// };

	const findFieldByName = (fields, name) => {
		for (const field of fields) {
			if (field.name === name) return field;
			if (field.subFields) {
				const found = findFieldByName(field.subFields, name);
				if (found) return found;
			}
		}
		return null;
	};

	const checkExists = (key) => {
		return formData.hasOwnProperty(key) && formData[key] === "Yes";
	};

	const renderField = (field) => {
		switch (field.type) {
			case "text":
				return (
					<div className="form-item" key={field.name}>
						<span>
							{field.label} <span className="star">*</span>
						</span>
						<input
							maxLength={field?.maxLength}
							type="text"
							name={field.name}
							value={formData[field.name] || ""}
							onChange={handleChange}
							placeholder={field?.placeholder}
						/>

						{field.btn && (
							<button
								disabled={!formData[field.name]}
								className="field-atn-btn"
							>
								{field.btn.text}
							</button>
						)}
					</div>
				);
			case "select":
				return (
					<div className="form-item" key={field.name}>
						<span>
							{field.label} <span className="star">*</span>
						</span>
						<select
							name={field.name}
							value={formData[field.name] || ""}
							onChange={handleChange}
						>
							<option value="" disabled>
								Select
							</option>
							{field.options.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</div>
				);
			case "radio":
				return (
					<React.Fragment key={field.name}>
						<div className="form-item" key={field.name}>
							<span>
								{field.label} <span className="star">*</span>
							</span>
							<ul>
								{field.options.map((option) => (
									<li key={option.value}>
										<input
											type="radio"
											name={field.name}
											value={option.value}
											id={option.id}
											checked={formData[field.name] === option.value}
											onChange={(e) => handleChange(e, field.notReqVal)}
										/>
										<label className="radio-label" htmlFor={option.id}>
											{option.label}
										</label>
									</li>
								))}
							</ul>
						</div>
						{field.subFields &&
							formData[field.name] === field.reqVal &&
							field.subFields.map((subField) => renderField(subField))}
						{/* {field[formData[field.name]]?.map((subField) => renderField(subField))} */}
					</React.Fragment>
				);
			case "date":
				return (
					<div className="form-item" key={field.name}>
						<span>
							{field.label} <span className="star">*</span>
						</span>
						<input
							type="date"
							name={field.name}
							value={formData[field.name] || ""}
							onClick={(e) => e.target.showPicker()}
							onChange={handleChange}
							style={{ cursor: "pointer" }}
						/>
					</div>
				);
			case "textarea":
				return (
					<div className="form-item" key={field.name}>
						<span>
							{field.label} <span className="star">*</span>
						</span>
						<textarea
							name={field.name}
							value={formData[field.name] || ""}
							onChange={handleChange}
							placeholder={field?.placeholder}
						/>
					</div>
				);
			case "line":
				return (
					<div className="form-item" key={field.name}>
						{field?.required && <hr />}
						<h6>{field.sectionName}</h6>
					</div>
				);
			case "checkbox":
				return (
					<div className="form-item" key={field.name}>
						<div className="tc-box">
							<input
								type="checkbox"
								name={field.name}
								id={field.name}
								value={formData[field.name] || ""}
								checked={formData[field.name] === true}
								onChange={handleChangeCheckBox}
							/>
							<label htmlFor={field.name}>{field.label}</label>
						</div>
					</div>
				);
			case "diclaration":
				return (
					<div className="form-item" key={field.name}>
						<ul className="diclaration">
							{field?.content?.map((content) => (
								<li key={content}>{content}</li>
							))}
						</ul>
					</div>
				);
			case "otp":
				return (
					field?.regex.test(formData[field.reqVal]) && (
						<div className="form-item" key={field.name}>
							<span>
								{field.label} <span className="star">*</span>
							</span>
							<DynamicOTP />
						</div>
					)
				);
			case "file":
				if (field.reqField && checkExists(field?.reqField)) {
					return (
						<div className="form-item" key={field.name}>
							<span>
								{field.label} <span className="star">*</span>
							</span>
							<input
								type="file"
								name={field.name}
								onChange={(e) => handleChangeFile(e)}
							/>
							{field.helperText && (
								<ul className="helper-text-box">
									{field.helperText.map((text) => (
										<small key={text}>{text}</small>
									))}
								</ul>
							)}
						</div>
					);
				} else if (!field.reqField) {
					return (
						<div className="form-item" key={field.name}>
							<span>
								{field.label} <span className="star">*</span>
							</span>
							<input
								type="file"
								name={field.name}
								onChange={(e) => handleChangeFile(e)}
							/>
							{field.helperText && (
								<ul className="helper-text-box">
									{field.helperText.map((text) => (
										<small key={text}>{text}</small>
									))}
								</ul>
							)}
						</div>
					);
				}
				break;
			case "password":
				return (
					<div className="form-item" key={field.name}>
						<span>
							{field.label} <span className="star">*</span>
						</span>
						<input
							type={!showPassword ? "password" : "text"}
							name={field.name}
							value={formData[field.name] || ""}
							onChange={handleChange}
							placeholder={field?.placeholder}
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
				);
			default:
				return null;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className="otr-form" onSubmit={handleSubmit}>
			{fields.map((field) => renderField(field))}
		</form>
	);
};

export default DynamicForm;
