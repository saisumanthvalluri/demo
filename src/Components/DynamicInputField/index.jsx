import React from "react";

const DynamicInputField = ({ type, placeholder, name, register, error, options }) => {
    return (
        <div className="form-input-err">
            {type === "select" ? (
                <select name={name} defaultValue="none" {...register(name)} className={error ? "error" : ""}>
                    {options.map((e) => (
                        <option key={e.value} value={e.value} disabled={e.id === 1}>
                            {e.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    {...register(name)}
                    className={error ? "error" : ""}
                    autoComplete="off"
                />
            )}
            {error?.message && <p className="err-msg">{error?.message}</p>}
        </div>
    );
};

export default DynamicInputField;
