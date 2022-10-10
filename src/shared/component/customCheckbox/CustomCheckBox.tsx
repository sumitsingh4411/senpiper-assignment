import React from "react";
import { CHECKBOX_LABEL } from "../../utils/constant";
import "./CustomCheckBox.css";

export default function CustomCheckBox({ label, error }: any) {
  return (
    <div className="custom-checkbox">
      <label className="custom_checkbox_label">{label}</label>
      <div className="custom_checkbox_container">
        {CHECKBOX_LABEL.map((item: any) => (
          <div className="checkbox_container">
            <input type="checkbox" className="custom_checkbox" />
            <span className="checkbox_label">{item.label}</span>
          </div>
        ))}
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
