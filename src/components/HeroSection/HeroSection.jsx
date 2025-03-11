import styles from './HeroSection.module.css';

export default function HeroSection({ isDarkMode }) {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{
        background: isDarkMode
          ? "linear-gradient(to right, #1e293b, #0f172a)"
          : "linear-gradient(to right, #e2e8f0, #cbd5e1)",
      }}
    >
      <div>

        {/* Левая половина экрана */}
        <div
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r blur-2xl transform-gpu"
          aria-hidden="true"
        >
          {/* Левый треугольник */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-75 ${styles['animate-triangle-left']}`}
            style={{
              clipPath: "polygon(0% 0%, 50% 50%, 0% 100%)", // Начальная форма
            }}
          />
        </div>

        {/* Правая половина экрана */}
        <div
          className="absolute inset-y-0 right-0 w-full bg-gradient-to-l blur-2xl transform-gpu"
          aria-hidden="true"
        >
          {/* Правый треугольник */}
          <div
            className={`absolute inset-0 bg-gradient-to-l from-[#6ee7b7] to-[#3b82f6] opacity-75 ${styles['animate-triangle-right']}`}
            style={{
              clipPath: "polygon(100% 0%, 50% 50%, 100% 100%)", // Начальная форма
            }}
          />
        </div>

        {/* Верхняя половина экрана */}
        <div
          className="absolute inset-x-0 top-0 h-full bg-gradient-to-b blur-2xl transform-gpu"
          aria-hidden="true"
        >
          {/* Верхний треугольник */}
          <div
            className={`absolute inset-0 bg-gradient-to-b from-[#590226] to-[#160d94] opacity-75 ${styles['animate-triangle-top']}`}
            style={{
              clipPath: "polygon(0% 0%, 50% 50%, 100% 0%)", // Форма верхнего треугольника
            }}
          />
        </div>

        {/* Нижняя половина экрана */}
        <div
          className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t blur-2xl transform-gpu"
          aria-hidden="true"
        >
          {/* Нижний треугольник */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[#bcfde3] to-[#0b182e] opacity-75 ${styles['animate-triangle-bottom']}`}
            style={{
              clipPath: "polygon(0% 100%, 50% 50%, 100% 100%)", // Форма нижнего треугольника
            }}
          />
        </div>

      </div>

      {/* Основной контент */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div>
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
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}