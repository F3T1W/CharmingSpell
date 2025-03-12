export default function AuthSection({ isDarkMode }) {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: isDarkMode
          ? "linear-gradient(to right, #1e293b, #0f172a)"
          : "linear-gradient(to right, #e2e8f0, #cbd5e1)",
      }}
    >
      {/* Контейнер с формой */}
      <div
        className={`sm:mx-auto sm:w-full sm:max-w-sm ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        } p-8 rounded-lg shadow-md`}
      >
        <h2
          className={`mt-6 text-center text-2xl font-bold tracking-tight ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Войти в анус Вовы
        </h2>

        <form action="#" method="POST" className="mt-8 space-y-6">
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
                className={`h-8 block w-full rounded-md pl-1 pb-1 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    : ""
                } shadow-sm sm:text-sm`}
              />
            </div>
          </div>

          {/* Поле Password */}
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
                className={`h-8 block w-full rounded-md pl-1 pb-1 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    : ""
                } shadow-sm sm:text-sm`}
              />
            </div>
          </div>

          {/* Кнопка Submit */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Войти
            </button>
          </div>
        </form>

        {/* Ссылка на регистрацию */}
        <p className="mt-6 text-center text-sm text-gray-500">
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
