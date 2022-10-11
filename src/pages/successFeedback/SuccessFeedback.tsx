import React from "react";
import TabSection from "../../shared/component/tabSection/TabSection";
import { PAGE_KEY } from "../../shared/utils/constant";
import "./SuccessFeedback.css";
import successIcon from "../../assets/success.png";

export default function SuccessFeedback() {
  return (
    <div className="feedback-success">
      <TabSection activeTab={PAGE_KEY.FEEDBACK_FORM} />
      <div className="feedback-success-container">
        <img src={successIcon} alt="success" className="success-icon" />
        <p className="success-text">Thank you for providing feedback</p>
        <p className="success-sub-text">
          {" "}
          we will work towards improving your experience
        </p>
        <button className="home_button">Close</button>
      </div>
    </div>
  );
}
