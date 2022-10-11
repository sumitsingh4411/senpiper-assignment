import React from "react";
import "./CustomInput.css";
import errorIcon from "../../../assets/error.svg";

export default function CustomInput({
  type,
  placeholder,
  label,
  error,
  value,
  onChange,
  name,
}: any) {
  return (
    <div className="custom-input">
      <label className="custom_label">
        {label}
        <span className="required_value">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="custom_input_filed"
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && (
        <div className="error">
          {" "}
          <img src={errorIcon} alt="error" className="error_icon" />{" "}
          <p className="error_text">{error}</p>
        </div>
      )}
    </div>
  );
}
