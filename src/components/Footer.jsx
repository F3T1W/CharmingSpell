import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer
      style={{
        background: isDarkMode
          ? "linear-gradient(to right, #1e293b, #0f172a)"
          : "linear-gradient(to right, #e2e8f0, #cbd5e1)",
      }}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:pt-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span
              className={`self-center text-2xl font-semibold whitespace-nowrap ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Charming Spell
            </span>
          </Link>
          <ul
            className={`flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                О нас
              </Link>
            </li>
            <li>
              <Link to="/policy" className="hover:underline me-4 md:me-6">
                Политика конфиденциальности
              </Link>
            </li>
            <li>
              <Link to="/license" className="hover:underline me-4 md:me-6">
                Лицензия
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="hover:underline">
                Обратная связь
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span
          className={`block text-sm sm:text-center ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          © 2025{" "}
          <Link to="https://f3t1w.com/" className="hover:underline">
            Charming Spell
          </Link>
          . Все права защищены.
        </span>
      </div>
    </footer>
  );
}
