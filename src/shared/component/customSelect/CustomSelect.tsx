import React from "react";
import "./CustomSelect.css";
import flag from "../../../assets/india.png";
import down from "../../../assets/down-chevron.png";

export default function CustomSelect({ lable }: any) {
  return (
    <div className="custom-select">
      <img src={flag} alt="flag" className="flag" />
      <img src={down} alt="down" className="down" />
    </div>
  );
}
