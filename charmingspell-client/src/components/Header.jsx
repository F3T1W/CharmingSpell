import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import { useFilteredNav } from "./useFilteredNav";

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const navigation = useFilteredNav();

  return (
      <header
          className="fixed inset-x-0 top-0 z-50"
          style={{
            background: isDarkMode
                ? "linear-gradient(to right, #1e293b, #0f172a)"
                : "linear-gradient(to right, #e2e8f0, #cbd5e1)",
          }}
      >
        <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <img alt="" src="/mark.svg" className="h-8 w-auto" />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`${
                    isDarkMode ? "text-white" : "text-gray-700"
                } -m-2.5 inline-flex items-center justify-center rounded-md p-2.5`}
            >
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
                <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm/6 font-semibold hover:underline ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                >
                  {item.name}
                </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
                to="/auth"
                className={`text-sm/6 font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                }`}
            >
              Войти
            </Link>
            <button
                onClick={toggleTheme}
                className={`ml-4 text-sm/6 font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                }`}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>

        <MobileMenu
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            navigation={navigation}
            isDarkMode={isDarkMode}
        />
      </header>
  );
}