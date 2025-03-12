"use client";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"; // Новая страница "О нас"
import FeaturesPage from "./pages/FeaturesPage"; // Новая страница "Преимущества"
import ShopPage from "./pages/ShopPage"; // Новая страница "Магазин"
import CustomPage from "./pages/FeedbackPage.jsx"; // Новая страница "Кастом"
import FAQPage from "./pages/FAQPage.jsx"; // Новая страница "F.A.Q."
import AuthPage from "./pages/AuthPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import "./App.css";

const navigation = [
  { name: "О нас", href: "/about" },
  { name: "Преимущества", href: "/features" },
  { name: "Магазин", href: "/shop" },
  { name: "Обратная связь", href: "/feedback" },
  { name: "F.A.Q.", href: "/faq" },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <Router>
      <div
        className={`overflow-y-hidden min-h-screen ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
        style={{
          background: isDarkMode
            ? "linear-gradient(to right, #1e293b, #0f172a)"
            : "linear-gradient(to right, #e2e8f0, #cbd5e1)",
        }}
      >
        <Header
          navigation={navigation}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
        <Routes>
          <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/feedback"
            element={<CustomPage isDarkMode={isDarkMode} />}
          />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/auth" element={<AuthPage isDarkMode={isDarkMode} />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}
