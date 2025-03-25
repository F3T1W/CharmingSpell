import FAQSection from "../components/FAQSection/FAQSection";
import { useEffect } from "react";

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <FAQSection />;
}
