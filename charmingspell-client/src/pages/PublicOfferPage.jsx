import PublicOfferSection from "../components/PublicOfferSection/PublicOfferSection";
import { useEffect } from "react";

export default function PublicOfferPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <PublicOfferSection />;
}
