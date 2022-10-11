import React, { useState } from "react";
import CustomCheckBox from "../../shared/component/customCheckbox/CustomCheckBox";
import CustomInput from "../../shared/component/customInput/CustomInput";
import TabSection from "../../shared/component/tabSection/TabSection";
import { FEEDBACK_FORM_LABEL, PAGE_KEY } from "../../shared/utils/constant";
import "./FeddBackForm.css";

export default function FeedBackForm() {
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    beverage: "",
    clean: "",
    food: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    beverage: "",
    clean: "",
    food: "",
  });
  const sendFeedbackForm = () => {
    let tempError = { ...error };
    if (feedbackForm.name === "") {
      tempError.name = "Name is required";
    }
    if (feedbackForm.email === "") {
      tempError.email = "Email is required";
    }
    if (feedbackForm.phone === "") {
      tempError.phone = "Phone is required";
    }
    if (feedbackForm.country === "") {
      setError({ ...error, country: "Required" });
    }
    if (feedbackForm.service === "") {
      tempError.service = "Required";
    }
    if (feedbackForm.beverage === "") {
      tempError.beverage = "Required";
    }
    if (feedbackForm.clean === "") {
      tempError.clean = "Required";
    }
    if (feedbackForm.food === "") {
      tempError.food = "Required";
    }
    setError(tempError);
  };
  console.log(error);
  const feedbackFormOnchange = (e: any) => {
    const { name, value } = e.target;
    setFeedbackForm({ ...feedbackForm, [name]: value });
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
