import UserAgreementSection from "../components/UserAgreementSection/UserAgreementSection";
import { useEffect } from "react";

export default function UserAgreementPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <UserAgreementSection />;
}
