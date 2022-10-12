import { useEffect, useState } from "react";
import TabSection from "../../shared/component/tabSection/TabSection";
import { PAGE_KEY } from "../../shared/utils/constant";
import {
  getDataFromLocalStorage,
  removeItemFromLocalStorage,
} from "../../shared/utils/helper";
import "./FeedBackList.css";
import FeedBackListTable from "./FeedBackListTable";

export default function FeedBackList() {
  const [checkValue, setCheckedValue]: any = useState([false]);
  const [feedbackList, setFeedbackList]: any = useState([]);

  useEffect(() => {
    setFeedbackList(getDataFromLocalStorage());
  }, []);

  const deleteCheckedData = () => {
    removeItemFromLocalStorage(checkValue, setFeedbackList);
  };

  return (
    <div className="feedback-section">
      <TabSection activeTab={PAGE_KEY.FEEDBACK_LIST} />
      <div className="feedback-list">
        <div className="feedback-list-container-top">
          <div className="feedback-list-header"></div>
          <div className="feedback-list-container">
            <div className="feedback-list-item">
              <FeedBackListTable
                checkValue={checkValue}
                setCheckedValue={setCheckedValue}
                feedbackList={feedbackList}
              />
            </div>
          </div>
        </div>
        <div className="feedback-list-footer">
          <button className="delete_button" onClick={deleteCheckedData}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
