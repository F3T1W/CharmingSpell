import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function UserAgreementSection() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className="overflow-hidden bg-white py-24 sm:py-32"
      style={{
        background: isDarkMode
          ? "linear-gradient(to right, #1e293b, #0f172a)"
          : "linear-gradient(to right, #e2e8f0, #cbd5e1)",
      }}
    >
      <div className="mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 sm:gap-y-20 lg:grid-cols-1">
          <div>
            <div>
              <h1
                className={`mt-2 text-4xl font-semibold tracking-tight sm:text-5xl ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Пользовательское соглашение
              </h1>

              <h2
                className={`mt-8 text-2xl font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                1. Общие положения
              </h2>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Настоящее Пользовательское соглашение (далее — Соглашение)
                регулирует отношения между интернет-магазином{" "}
                <strong>Charming Spell</strong> (далее — Сервис) и
                пользователями, которые используют его функционал.
              </p>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Использование Сервиса означает безоговорочное согласие
                пользователя с настоящим Соглашением и указанными в нем
                условиями. В случае несогласия с этими условиями пользователь
                должен воздержаться от использования Сервиса.
              </p>

              <h2
                className={`mt-8 text-2xl font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                2. Регистрация и использование аккаунта
              </h2>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                2.1. Регистрация не обязательна для просмотра магазина или
                отправки обратной связи. Однако она обязательна для покупки
                товаров себе или в подарок.
              </p>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                2.2. При регистрации требуется указать адрес электронной почты,
                придумать пароль и никнейм. При авторизации через сторонние
                сервисы могут собираться дополнительные данные, такие как имя и
                почта.
              </p>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                2.3. После регистрации пользователь получает право на покупку
                аудиозаписей и обязан не распространять купленный контент в
                свободном доступе.
              </p>

              <h2
                className={`mt-8 text-2xl font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                3. Разрешенные и запрещенные действия
              </h2>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                3.1. На сайте разрешено:
              </p>
              <ul
                className={`mt-4 list-disc pl-6 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <li>Регистрация и авторизация.</li>
                <li>Отправка обратной связи.</li>
                <li>Покупка товаров.</li>
              </ul>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                3.2. Запрещено:
              </p>
              <ul
                className={`mt-4 list-disc pl-6 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <li>Взлом системы или попытки несанкционированного доступа.</li>
                <li>Спам через форму обратной связи.</li>
                <li>Использование ботов или автоматизированных скриптов.</li>
                <li>Любые действия, нарушающие работу Сервиса.</li>
              </ul>

              <h2
                className={`mt-8 text-2xl font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                4. Оплата и возврат
              </h2>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                4.1. Для оплаты используется платежная система ЮKassa. Пользователи
                выбирают товары, добавляют их в корзину и оплачивают одним
                платежом.
              </p>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                4.2. Возможность отправить товар другому пользователю доступна как
                для зарегистрированных, так и для незарегистрированных
                пользователей.
              </p>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                4.3. Возврат денежных средств не предусмотрен. Претензии
                рассматриваются через форму обратной связи.
              </p>

              <h2
                className={`mt-8 text-2xl font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                5. Контент и права на него
              </h2>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                5.1. Контент на сайте является интеллектуальной собственностью
                Сервиса и не принадлежит третьим лицам.
              </p>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                5.2. Запрещено копировать, скачивать или распространять контент с
                сайта. После покупки аудиозапись доступна для скачивания в личном
                кабинете.
              </p>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                5.3. Товары предназначены строго для личного использования, если
                иное не обговорено в процессе создания кастомной записи.
              </p>

              <h2
                className={`mt-8 text-2xl font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                6. Ответственность сторон
              </h2>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                6.1. Администрация Сервиса несет ответственность за качество
                товаров и работоспособность платформы.
              </p>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                6.2. Распространение аудиозаписей в свободный доступ будет
                расценено как кража интеллектуальной собственности.
              </p>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                6.3. Администрация несет ответственность за утечку баз данных.
              </p>

              <h2
                className={`mt-8 text-2xl font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                7. Персональные данные
              </h2>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                7.1. Сервис собирает только необходимые персональные данные:
                адрес электронной почты и данные из сторонних сервисов
                авторизации.
              </p>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                7.2. Персональные данные передаются только платежным системам для
                выполнения обязательств перед пользователем.
              </p>

              <h2
                className={`mt-8 text-2xl font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                8. Обновления соглашения
              </h2>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                8.1. Пользовательское соглашение может обновляться по мере
                необходимости. Уведомления об изменениях направляются на email
                пользователей.
              </p>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                8.2. Изменения вступают в силу спустя сутки после публикации.
              </p>

              <h2
                className={`mt-8 text-2xl font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                9. Разрешение споров
              </h2>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                9.1. Споры преимущественно решаются в досудебном порядке.
              </p>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                9.2. К отношениям между Сервисом и пользователями применяется
                законодательство Российской Федерации.
              </p>

              <h2
                className={`mt-8 text-2xl font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                10. Дополнительные условия
              </h2>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                10.1. Подписки, программы лояльности и реферальные системы не
                предусмотрены.
              </p>
              <p
                className={`mt-4 text-lg/8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                10.2. Частные случаи рассматриваются индивидуально.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}