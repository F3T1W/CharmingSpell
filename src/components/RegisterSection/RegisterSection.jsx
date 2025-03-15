import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub, faVk } from "@fortawesome/free-brands-svg-icons";

export default function RegisterSection() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className="relative h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: isDarkMode
          ? "linear-gradient(to right, #1e293b, #0f172a)"
          : "linear-gradient(to right, #e2e8f0, #cbd5e1)",
      }}
    >
      <div
        className={`sm:mx-auto sm:w-full sm:max-w-sm ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        } p-8 rounded-lg shadow-md`}
        style={{
          transform: "scale(1.2)",
          transformOrigin: "center",
        }}
      >
        <h2
          className={`mt-6 text-center text-2xl font-bold tracking-tight ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Хаусёнок уже близко!
        </h2>

        <form action="#" method="POST" className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={`h-8 block w-full rounded-md pl-1 pb-1 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    : ""
                } shadow-sm sm:text-sm`}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Пароль
              </label>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className={`h-8 block w-full rounded-md pl-1 pb-1 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    : ""
                } shadow-sm sm:text-sm`}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Подтвердите пароль
              </label>
            </div>
            <div className="mt-1">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="confirmPassword"
                required
                autoComplete="current-password"
                className={`h-8 block w-full rounded-md pl-1 pb-1 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    : ""
                } shadow-sm sm:text-sm`}
              />
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 pt-6">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center space-x-4 pt-6">
          <hr className="flex-1 h-px bg-gray-200 dark:bg-gray-700 border-0" />

          <p className={`text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
            Или
          </p>

          <hr className="flex-1 h-px bg-gray-200 dark:bg-gray-700 border-0" />
        </div>
        <div className="flex justify-center space-x-4 pt-4">
          <div
            className={`cursor-pointer rounded-xl p-2 transition duration-300 ease-in-out hover:bg-pink-800 hover:text-white ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <FontAwesomeIcon icon={faVk} size="lg" />
          </div>

          <div
            className={`cursor-pointer rounded-xl p-2 transition duration-300 ease-in-out hover:bg-pink-800 hover:text-white ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </div>

          <div
            className={`cursor-pointer rounded-xl p-2 transition duration-300 ease-in-out hover:bg-pink-600 hover:text-white ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <FontAwesomeIcon icon={faGoogle} size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
