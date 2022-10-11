import TabSection from "../../shared/component/tabSection/TabSection";
import { PAGE_KEY } from "../../shared/utils/constant";
import "./FeedBackList.css";
import FeedBackListTable from "./FeedBackListTable";

export default function FeedBackList() {
  return (
    <div className="feedback-section">
      <TabSection activeTab={PAGE_KEY.FEEDBACK_LIST} />
      <div className="feedback-list">
        <div className="feedback-list-container-top">
          <div className="feedback-list-header"></div>
          <div className="feedback-list-container">
            <div className="feedback-list-item">
              <FeedBackListTable/>
            </div>
          </div>
        </div>
        <div className="feedback-list-footer">
          <button className="delete_button">Delete</button>
        </div>
      </div>
    </div>
  );
}
