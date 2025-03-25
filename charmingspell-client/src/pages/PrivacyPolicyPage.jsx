import PrivacyPolicySection from "../components/PrivacyPolicySection/PrivacyPolicySection";
import { useEffect } from "react";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <PrivacyPolicySection />;
}
