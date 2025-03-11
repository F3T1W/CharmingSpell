"use client";

import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

const navigation = [
  { name: "О нас", href: "#" },
  { name: "Преимущества", href: "#" },
  { name: "Магазин", href: "#" },
  { name: "Обратная связь", href: "#" },
  { name: "F.A.Q.", href: "#" },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div className={`overflow-y-hidden min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Header 
        navigation={navigation} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <HomePage isDarkMode={isDarkMode} />
    </div>
  );
}