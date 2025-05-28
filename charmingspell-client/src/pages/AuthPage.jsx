import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../components/ThemeContext.jsx";
import {useAuth} from "../components/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

export default function AuthPage() {
  const { isDarkMode } = useContext(ThemeContext);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    if (!login) {
      setMessage("Ошибка: Функция логина недоступна.");
      setIsLoading(false);
      return;
    }

    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        setMessage("Вход выполнен успешно!");
        setTimeout(() => navigate("/"), 1000);
      } else {
        setMessage("Ошибка входа. Проверьте email и пароль.");
      }
    } catch (error) {
      console.error("Ошибка логина:", error);
      setMessage(error.response?.data?.message || "Произошла ошибка при входе.");
      setTimeout(() => navigate("/"), 1000);
    } finally {
      setIsLoading(false);
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
            Стать писюльковым волосом Миши
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                <div className="text-sm">
                  <a
                      href="#"
                      className={`font-medium ${
                          isDarkMode
                              ? "text-indigo-300 hover:text-indigo-500"
                              : "text-indigo-600 hover:text-indigo-900"
                      }`}
                  >
                    Забыли пароль?
                  </a>
                </div>
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

            {message && (
                <p
                    className={`text-center text-sm ${
                        message.includes("Ошибка") ? "text-red-500" : "text-green-500"
                    }`}
                >
                  {message}
                </p>
            )}

            <div>
              <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex w-full justify-center rounded-md py-2 px-4 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                      isLoading
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-indigo-600 hover:bg-indigo-500"
                  }`}
              >
                {isLoading ? "Загрузка..." : "Войти"}
              </button>
            </div>
          </form>

          <p
              className={`mt-6 text-center text-sm ${
                  isDarkMode ? "text-white" : "text-black"
              }`}
          >
            Шо это такое?{" "}
            <a
                href="/register"
                className={`font-medium ${
                    isDarkMode
                        ? "text-indigo-300 hover:text-indigo-500"
                        : "text-indigo-600 hover:text-indigo-900"
                }`}
            >
              Зарегистрироваться
            </a>
          </p>
        </div>
      </div>
  );
}
