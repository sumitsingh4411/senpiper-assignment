import React from "react";
import CustomCheckBox from "../../shared/component/customCheckbox/CustomCheckBox";
import CustomInput from "../../shared/component/customInput/CustomInput";
import TabSection from "../../shared/component/tabSection/TabSection";
import { FEEDBACK_FORM_LABEL, PAGE_KEY } from "../../shared/utils/constant";
import "./FeddBackForm.css";

export default function FeedBackForm() {
  return (
    <div className="feedback-section">
      <TabSection activeTab={PAGE_KEY.FEEDBACK_FORM} />
      <div className="feedback-form">
        <div className="form-section">
          <div className="feedback-form-header">Aromatic bar</div>
          <div className="feedback-form-container">
            <div className="feedback-row">
              <CustomInput
                type="text"
                placeholder="E.g. jon snow"
                label="Customer Name"
              />
              <CustomInput
                type="email"
                placeholder="E.g. abc@gmail.com"
                label="Email"
              />
            </div>
            <div className="feedback-row">
              <CustomInput type="text" placeholder="9999999999" label="Phone" />
              <div className="place_holer_div"></div>
            </div>
            <div className="feedback-row">
              <CustomCheckBox label={FEEDBACK_FORM_LABEL.SERVICE} />
              <CustomCheckBox label={FEEDBACK_FORM_LABEL.BEVERAGE} />
            </div>
            <div className="feedback-row">
              <CustomCheckBox label={FEEDBACK_FORM_LABEL.CLEAN} />
              <CustomCheckBox label={FEEDBACK_FORM_LABEL.FOOD} />
            </div>
          </div>
        </div>
        <button className="submit-button">Submit Review</button>
      </div>
    </div>
  );
}
