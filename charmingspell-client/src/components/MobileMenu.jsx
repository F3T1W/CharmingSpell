import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../components/ThemeContext";

export default function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
  navigation,
}) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const closeMenuAndNavigate = (callback) => {
    setMobileMenuOpen(false);
    if (callback) callback();
  };

  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className="lg:hidden"
    >
      <div className="fixed inset-0 z-50" />
      <DialogPanel
        className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() => closeMenuAndNavigate()}
            className="-m-1.5 p-1.5"
          >
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
              alt="Логотип"
            />
          </Link>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`text-sm font-semibold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className={`${
                isDarkMode ? "text-white" : "text-gray-700"
              } -m-2.5 p-2.5`}
            >
              <XMarkIcon className="size-6" />
            </button>
          </div>
        </div>

        <div className="mt-6">
          <div className="divide-y">
            <div className="space-y-2 py-6 flex flex-col items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => closeMenuAndNavigate()}
                  className={`block px-3 py-2 rounded-lg ${
                    isDarkMode
                      ? "text-white hover:bg-gray-800"
                      : "text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6 flex flex-col items-center">
              <Link
                to="/auth"
                onClick={() => closeMenuAndNavigate()}
                className={`block px-3 py-2.5 rounded-lg ${
                  isDarkMode
                    ? "text-white hover:bg-gray-800"
                    : "text-gray-900 hover:bg-gray-50"
                }`}
              >
                Войти
              </Link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
