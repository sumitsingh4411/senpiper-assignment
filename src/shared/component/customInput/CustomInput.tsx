import React from "react";
import "./CustomInput.css";

export default function CustomInput({ type, placeholder, label, error }: any) {
  return (
    <div className="custom-input">
      <label className="custom_label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="custom_input_filed"
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
}
