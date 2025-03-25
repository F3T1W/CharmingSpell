import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";
import apiClient from "../ApiClient";

export default function HeroSection() {
  const { isDarkMode } = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get('/Test');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="overflow-hidden relative isolate px-6 pt-14 lg:px-8"
      style={{
        background: isDarkMode
          ? "linear-gradient(to right, #1e293b, #0f172a)"
          : "linear-gradient(to right, #e2e8f0, #cbd5e1)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
      >
        <div
          style={{
            clipPath: "polygon(-25% 50%, 50% 75%, 100% 100%, 100% 60%)",
          }}
          className="relative aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr opacity-75 from-[#9089fc] to-[#ff80b5] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl py-60 sm:py-48 lg:py-64">
        <div className="text-center">
          <h1
            className={`text-5xl font-semibold tracking-tight text-balance ${
              isDarkMode ? "text-white" : "text-gray-900"
            } sm:text-7xl`}
          >
            Charming Spell
          </h1>
          <p
            className={`mt-8 text-lg font-medium text-pretty ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            } sm:text-xl/8`}
          >
            Индивидуальные решения и разнообразие фетишей для вас
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Дрочи мой хуй себе в рот!
            </a>

            <a
              href="#"
              className={`text-sm/6 font-semibold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {isLoading ? "Loading..." : data?.message || "No data"}
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none"
      >
        <div
          style={{
            clipPath: "polygon(100% 60%, 100% 100%, 15% 60%, 0% 0%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr opacity-75 from-[#ff80b5] to-[#9089fc] sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}