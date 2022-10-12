import React from "react";
import "./FeedBackList.css";
import search from "../../assets/search.svg";
import reload from "../../assets/reload.png";
import { useNavigate } from "react-router-dom";
import { URLPaths } from "../../shared/utils/constant";

export default function FeedBackHeader({ feedbackList }: any) {
  const navigate = useNavigate();

  const addNewFeedBack = () => {
    navigate(URLPaths.FEEDBACK_FORM);
  };

  const applicationReload = () => {
    window.location.reload();
  };

  return (
    <div className="feedback-list-header">
      <div className="feedback-list-header-left">
        <h2>Aromatic Bar</h2>
        <p>{feedbackList?.length} records found.</p>
      </div>
      <div className="feedback-list-header-right">
        <div className="filter-input-icon">
          <input type="text" placeholder="Search..." className="input_search" />
          <img src={search} alt="search" className="search_icon" />
        </div>
        <div className="filter-input-reload">
          <img
            src={reload}
            alt="reload"
            className="reload_icon"
            onClick={applicationReload}
          />
        </div>
        <button className="add_button" onClick={addNewFeedBack}>
          Add New
        </button>
      </div>
    </div>
  );
}
