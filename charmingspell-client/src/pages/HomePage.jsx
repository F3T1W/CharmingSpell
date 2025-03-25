import HeroSection from "../components/HeroSection/HeroSection";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <HeroSection />;
}
