import FeedbackSection from "../components/FeedbackSection/FeedbackSection";
import { useEffect } from "react";

export default function FeedbackPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <FeedbackSection />;
}
