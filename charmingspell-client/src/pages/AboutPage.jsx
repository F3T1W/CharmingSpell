import AboutSection from "../components/AboutSection/AboutSection";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <AboutSection />;
}
