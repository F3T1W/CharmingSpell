"use client";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import ShopPage from "./pages/ShopPage";
import FeedbackPage from "./pages/FeedbackPage";
import CustomPage from "./pages/CustomPage";
import FAQPage from "./pages/FAQPage";
import AuthPage from "./pages/AuthPage";
import RegisterPage from "./pages/RegisterPage";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import AgeAlert from "./components/AgeAlert/AgeAlert";
import { ThemeProvider } from "./components/ThemeContext";
import "./App.css";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import UserAgreementPage from "./pages/UserAgreementPage";
import PublicOfferPage from "./pages/PublicOfferPage";

const navigation = [
  { name: "О нас", href: "/about" },
  { name: "Преимущества", href: "/features" },
  { name: "Магазин", href: "/shop" },
  { name: "Кастом", href: "/custom" },
  { name: "F.A.Q.", href: "/faq" },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <Header
            navigation={navigation}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <main className="flex-grow overflow-y-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/custom" element={<CustomPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />
              <Route path="/userAgreement" element={<UserAgreementPage />} />
              <Route path="/publicOffer" element={<PublicOfferPage />} />
            </Routes>
          </main>
          <Footer navigation={navigation} />
        </div>
      </Router>
      <Alert />
      <AgeAlert />
    </ThemeProvider>
  );
}
