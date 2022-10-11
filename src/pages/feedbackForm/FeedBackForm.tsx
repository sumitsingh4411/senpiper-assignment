import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomCheckBox from "../../shared/component/customCheckbox/CustomCheckBox";
import CustomInput from "../../shared/component/customInput/CustomInput";
import TabSection from "../../shared/component/tabSection/TabSection";
import {
  FEEDBACK_FORM_LABEL,
  INITIAL_STATE,
  PAGE_KEY,
  URLPaths,
} from "../../shared/utils/constant";
import { checkHasError, getAllError, setItemToLocalStorage } from "../../shared/utils/helper";
import "./FeddBackForm.css";

export default function FeedBackForm() {
  const navigate = useNavigate();
  const [feedbackForm, setFeedbackForm] = useState(INITIAL_STATE);
  const [error, setError] = useState(INITIAL_STATE);

  const sendFeedbackForm = () => {
    let res_error = getAllError(feedbackForm, setError, error);
    if (checkHasError(res_error)) {
      return;
    } else {
      setItemToLocalStorage(feedbackForm);
      navigate(URLPaths.FEEDBACK_SUCCESS);
    }
  };

  const feedbackFormOnchange = (e: any) => {
    const { name, value } = e.target;
    setFeedbackForm({ ...feedbackForm, [name]: value });
    if (checkHasError(error)) {
      getAllError({ ...feedbackForm, [name]: value }, setError, error);
    }
  };

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
                value={feedbackForm.name}
                onChange={feedbackFormOnchange}
                name="name"
                error={error.name}
              />
              <CustomInput
                type="email"
                placeholder="E.g. abc@gmail.com"
                label="Email"
                value={feedbackForm.email}
                onChange={feedbackFormOnchange}
                name="email"
                error={error.email}
              />
            </div>
            <div className="feedback-row">
              <CustomInput
                type="text"
                placeholder="9999999999"
                label="Phone"
                value={feedbackForm.phone}
                onChange={feedbackFormOnchange}
                name="phone"
                error={error.phone}
              />
              <div className="place_holer_div"></div>
            </div>
            <div className="feedback-row">
              <CustomCheckBox
                label={FEEDBACK_FORM_LABEL.SERVICE}
                value={feedbackForm.service}
                onChange={feedbackFormOnchange}
                name="service"
                error={error.service}
              />
              <CustomCheckBox
                label={FEEDBACK_FORM_LABEL.BEVERAGE}
                value={feedbackForm.beverage}
                onChange={feedbackFormOnchange}
                name="beverage"
                error={error.beverage}
              />
            </div>
            <div className="feedback-row">
              <CustomCheckBox
                label={FEEDBACK_FORM_LABEL.CLEAN}
                value={feedbackForm.clean}
                onChange={feedbackFormOnchange}
                name="clean"
                error={error.clean}
              />
              <CustomCheckBox
                label={FEEDBACK_FORM_LABEL.FOOD}
                value={feedbackForm.food}
                onChange={feedbackFormOnchange}
                name="food"
                error={error.food}
              />
            </div>
          </div>
        </div>
        <div className="form-section-btn">
          <button className="submit-button" onClick={sendFeedbackForm}>
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}
