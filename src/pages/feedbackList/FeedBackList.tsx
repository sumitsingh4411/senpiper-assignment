import React from "react";
import TabSection from "../../shared/component/tabSection/TabSection";
import { PAGE_KEY } from "../../shared/utils/constant";
import "./FeedBackList.css";

export default function FeedBackList() {
  return (
    <div className="feedback-section">
      <TabSection activeTab={PAGE_KEY.FEEDBACK_LIST} />
      <div className="feedback-list"></div>
    </div>
  );
}
