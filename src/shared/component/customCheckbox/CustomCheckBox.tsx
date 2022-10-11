import React from "react";
import { CHECKBOX_LABEL } from "../../utils/constant";
import "./CustomCheckBox.css";
import errorIcon from "../../../assets/error.svg";

export default function CustomCheckBox({
  label,
  error,
  value,
  onChange,
  name,
}: any) {
  return (
    <div className="custom-checkbox">
      <label className="custom_checkbox_label">
        {label}
        <span className="required_value">*</span>
      </label>
      <div className="custom_checkbox_container">
        {CHECKBOX_LABEL.map((item: any) => (
          <div className="checkbox_container">
            <input
              type="checkbox"
              className="custom_checkbox"
              value={value}
              onChange={onChange}
              name={name}
            />
            <span className="checkbox_label">{item.label}</span>
          </div>
        ))}
      </div>
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
