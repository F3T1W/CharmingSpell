import RegisterSection from "../components/RegisterSection/RegisterSection";
import { useEffect } from "react";

export default function RegisterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <RegisterSection />;
}
