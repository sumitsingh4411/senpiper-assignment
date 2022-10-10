import { useNavigate } from "react-router-dom";
import { PAGE_KEY, TAB_NAME, URLPaths } from "../../utils/constant";
import "./TabSection.css";

export default function TabSection({ activeTab }: any) {
  const navigate = useNavigate();

  const selectTab = (index: number) => {
    if (index === PAGE_KEY.FEEDBACK_FORM) {
      navigate(URLPaths.FEEDBACK_FORM);
    } else if (index === PAGE_KEY.FEEDBACK_LIST) {
      navigate(URLPaths.FEEDBACK_LIST);
    }
  };

  return (
    <div className="tab-section">
      {TAB_NAME.map((tabName: any, index: number) => (
        <div
          onClick={() => {
            selectTab(index);
          }}
          key={index}
          className={`tab-name ${activeTab === index ? "active-tab" : ""}`}
        >
          {tabName.name}
        </div>
      ))}
    </div>
  );
}
