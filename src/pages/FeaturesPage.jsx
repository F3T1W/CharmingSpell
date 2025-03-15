import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import { useEffect } from "react";

export default function FeaturesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <FeaturesSection />;
}
