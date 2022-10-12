import React from "react";
import "./FeedBackList.css";
import search from "../../assets/search.svg";
import reload from "../../assets/reload.png";

export default function FeedBackHeader() {
  return (
    <div className="feedback-list-header">
      <div className="feedback-list-header-left">
        <h2>Aromatic Bar</h2>
      </div>
      <div className="feedback-list-header-right">
        <div className="filter-input-icon">
          <input type="text" placeholder="Search" className="input_search" />
          <img src={search} alt="search" className="search_icon" />
        </div>
        <div className="filter-input-reload">
          <img src={reload} alt="reload" className="reload_icon" />
        </div>
        <button className="add_button">Add New</button>
      </div>
    </div>
  );
}
