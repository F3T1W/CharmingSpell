import CustomSection from "../components/CustomSection/CustomSection";
import { useEffect } from "react";

export default function CustomPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <CustomSection />;
}
