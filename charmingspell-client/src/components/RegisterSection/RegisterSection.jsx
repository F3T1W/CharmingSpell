import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub, faVk } from "@fortawesome/free-brands-svg-icons";
import apiClient from "../ApiClient";

export default function RegisterSection() {
  const { isDarkMode } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }

    try {
      const response = await apiClient.post("/api/test/register", {
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword // Исправлено: confirmPassword
      });

      if (response.status === 200) {
        alert("Регистрация успешна!");
        setFormData({ email: "", password: "", confirmPassword: "" }); // Очистка формы
      } else {
        alert("Ошибка при регистрации.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при регистрации.");
    }
  };

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

          {/* Форма регистрации */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Поле Email */}
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
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    className={`h-8 block w-full rounded-md pl-1 pb-1 ${
                        isDarkMode
                            ? "bg-gray-700 border-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                            : ""
                    } shadow-sm sm:text-sm`}
                />
              </div>
            </div>

            {/* Поле Пароль */}
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
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                    className={`h-8 block w-full rounded-md pl-1 pb-1 ${
                        isDarkMode
                            ? "bg-gray-700 border-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                            : ""
                    } shadow-sm sm:text-sm`}
                />
              </div>
            </div>

            {/* Поле Подтверждение пароля */}
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
                    type="password"
                    required
                    autoComplete="current-password"
                    value={formData.confirmPassword} // Исправлено: confirmPassword
                    onChange={(e) =>
                        setFormData({ ...formData, confirmPassword: e.target.value }) // Исправлено: confirmPassword
                    }
                    className={`h-8 block w-full rounded-md pl-1 pb-1 ${
                        isDarkMode
                            ? "bg-gray-700 border-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                            : ""
                    } shadow-sm sm:text-sm`}
                />
              </div>
            </div>

            {/* Кнопка регистрации */}
            <div className="flex items-center justify-center space-x-4 pt-6">
              <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Зарегистрироваться
              </button>
            </div>
          </form>

          {/* Разделитель или */}
          <div className="flex items-center justify-center space-x-4 pt-6">
            <hr className="flex-1 h-px bg-gray-200 dark:bg-gray-700 border-0" />

            <p className={`text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
              Или
            </p>

            <hr className="flex-1 h-px bg-gray-200 dark:bg-gray-700 border-0" />
          </div>

          {/* Социальные кнопки */}
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