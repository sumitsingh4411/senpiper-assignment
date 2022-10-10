import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedBackForm from "../pages/feedbackForm/FeedBackForm";
import FeedBackList from "../pages/feedbackList/FeedBackList";
import { URLPaths } from "../shared/utils/constant";

export default function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={URLPaths.HOME} element={<FeedBackForm />} />
        <Route path={URLPaths.FEEDBACK_FORM} element={<FeedBackForm />} />
        <Route path={URLPaths.FEEDBACK_LIST} element={<FeedBackList />} />
        <Route path="**" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}
