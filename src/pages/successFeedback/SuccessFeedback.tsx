import React from "react";
import TabSection from "../../shared/component/tabSection/TabSection";
import { PAGE_KEY, URLPaths } from "../../shared/utils/constant";
import "./SuccessFeedback.css";
import successIcon from "../../assets/success.png";
import { useNavigate } from "react-router-dom";

export default function SuccessFeedback() {
  const navigate = useNavigate();

  const closeSuccess = () => {
    navigate(URLPaths.FEEDBACK_FORM);
  };

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
        <button className="home_button" onClick={closeSuccess}>
          Close
        </button>
      </div>
    </div>
  );
}
