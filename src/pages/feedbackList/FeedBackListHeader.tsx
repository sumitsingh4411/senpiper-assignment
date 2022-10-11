import React from "react";
import { FEEDBACK_FORM_LABEL } from "../../shared/utils/constant";
import "./FeedBackList.css";

export default function FeedBackListHeader() {
  return (
    <div className="feedback-list-header-item">
      <input type="checkbox" />
      <p className="header-item">Form details</p>
      <p className="header-item">Customer Name</p>
      <p className="header-item">Email</p>
      <p className="header-item">Phone</p>
      <p className="header-item">{FEEDBACK_FORM_LABEL.SERVICE}</p>
      <p className="header-item">{FEEDBACK_FORM_LABEL.BEVERAGE}</p>
      <p className="header-item">{FEEDBACK_FORM_LABEL.CLEAN}</p>
      <p className="header-item">{FEEDBACK_FORM_LABEL.FOOD}</p>
    </div>
  );
}
