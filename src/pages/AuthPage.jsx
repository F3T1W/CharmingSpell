import AuthSection from "../components/AuthSection/AuthSection";
import { useEffect } from "react";

export default function AuthPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <AuthSection />;
}
