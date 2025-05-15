import VerifySection from "../components/VerifySection/VerifySection";
import { useEffect } from "react";

export default function VerifyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <VerifySection />;
}
