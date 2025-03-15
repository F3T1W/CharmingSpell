import ShopSection from "../components/ShopSection/ShopSection";
import { useEffect } from "react";

export default function ShopPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ShopSection />;
}
