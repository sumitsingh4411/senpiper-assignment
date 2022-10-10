import React from "react";
import TabSection from "../../shared/component/tabSection/TabSection";
import { PAGE_KEY } from "../../shared/utils/constant";
import "./FeddBackForm.css";

export default function FeedBackForm() {
  return (
    <div className="feedback-section">
      <TabSection activeTab={PAGE_KEY.FEEDBACK_FORM} />
      <div className="feedback-form">
        <div className="form-section">
          <div className="feedback-form-header">Aromatic bar</div>
          <div className="feedback-first-row"></div>
        </div>
        <button className="submit-button">Submit Review</button>
      </div>
    </div>
  );
}
