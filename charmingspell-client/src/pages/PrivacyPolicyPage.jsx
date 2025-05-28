import {useContext, useEffect} from "react";
import {ThemeContext} from "../components/ThemeContext.jsx";

export default function PrivacyPolicyPage() {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                  Политика конфиденциальности
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
                  Настоящая Политика конфиденциальности персональной информации
                  (далее — Политика) разработана в соответствии с требованиями
                  статьи 18.1 Федерального закона от 27.07.2006 № 152-ФЗ «О
                  персональных данных» и регулирует порядок обработки персональных
                  данных пользователей интернет-магазина{" "}
                  <strong>Charming Spell</strong> (далее — Сервис).
                </p>
                <p
                    className={`mt-4 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Использование Сервиса означает безоговорочное согласие
                  пользователя с настоящей Политикой и указанными в ней условиями
                  обработки его персональной информации. В случае несогласия с
                  этими условиями пользователь должен воздержаться от
                  использования Сервиса.
                </p>

                <h2
                    className={`mt-8 text-2xl font-medium ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  2. Основные понятия
                </h2>
                <p
                    className={`mt-4 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  В настоящей Политике используются следующие основные понятия:
                </p>
                <ul
                    className={`mt-4 list-disc pl-6 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  <li>
                    <strong>Персональная информация:</strong> Любая информация,
                    относящаяся к Пользователю, которую он предоставляет
                    самостоятельно при использовании Сервиса, включая данные,
                    полученные через файлы cookie, метрические программы и сторонние
                    сервисы авторизации.
                  </li>
                  <li>
                    <strong>Обработка персональных данных:</strong> Любые действия с
                    персональными данными, включая сбор, запись, систематизацию,
                    хранение, уточнение, использование, передачу, блокирование,
                    удаление или уничтожение.
                  </li>
                  <li>
                    <strong>Автоматизированная обработка:</strong> Обработка
                    персональных данных с помощью средств вычислительной техники.
                  </li>
                  <li>
                    <strong>Администрация Сервиса:</strong> Лицо, осуществляющее
                    управление Сервисом и являющееся плательщиком налога на
                    профессиональный доход.
                  </li>
                </ul>

                <h2
                    className={`mt-8 text-2xl font-medium ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  3. Цели обработки персональных данных
                </h2>
                <p
                    className={`mt-4 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Персональные данные пользователей обрабатываются для следующих
                  целей:
                </p>
                <ul
                    className={`mt-4 list-disc pl-6 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  <li>Создание и поддержка личного кабинета пользователя.</li>
                  <li>
                    Обеспечение возможности покупки и загрузки цифровых товаров.
                  </li>
                  <li>
                    Предоставление возможности дарить товары другим пользователям.
                  </li>
                  <li>
                    Улучшение функционала Сервиса и аналитика пользовательской
                    активности.
                  </li>
                </ul>

                <h2
                    className={`mt-8 text-2xl font-medium ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  4. Какие данные мы собираем
                </h2>
                <p
                    className={`mt-4 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Мы собираем следующие категории данных:
                </p>
                <ul
                    className={`mt-4 list-disc pl-6 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  <li>
                    <strong>Email:</strong> используется для регистрации, входа в
                    личный кабинет и отправки уведомлений.
                  </li>
                  <li>
                    <strong>Cookies:</strong> автоматически собираются для
                    обеспечения корректной работы Сервиса, анализа активности
                    пользователей и улучшения качества обслуживания.
                  </li>
                  <li>
                    <strong>Данные из сторонних сервисов авторизации:</strong> при
                    использовании авторизации через VK, GitHub или Google мы
                    получаем доступ только к тем данным, которые предоставляются
                    этими сервисами (например, email).
                  </li>
                </ul>

                <h2
                    className={`mt-8 text-2xl font-medium ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  5. Условия обработки персональных данных
                </h2>
                <p
                    className={`mt-4 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  5.1. Персональные данные обрабатываются с момента их
                  предоставления до достижения целей обработки или отзыва согласия
                  пользователя.
                </p>
                <p
                    className={`mt-4 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  5.2. Мы храним данные в базе данных Сервиса для обеспечения
                  возможности входа в личный кабинет, сохранения истории покупок и
                  управления аккаунтом.
                </p>
                <p
                    className={`mt-4 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  5.3. Пароли хранятся в зашифрованном виде (хэшированные), что
                  делает невозможным их восстановление в чистом виде.
                </p>

                <h2
                    className={`mt-8 text-2xl font-medium ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  6. Защита данных
                </h2>
                <p
                    className={`mt-4 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Мы принимаем все необходимые меры для защиты персональных данных
                  от несанкционированного доступа, утраты или утечки. В частности:
                </p>
                <ul
                    className={`mt-4 list-disc pl-6 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  <li>Используем шифрование для защиты паролей.</li>
                  <li>Регулярно обновляем системы безопасности.</li>
                  <li>
                    Ограничиваем доступ к данным только для сотрудников,
                    непосредственно работающих с ними.
                  </li>
                </ul>

                <h2
                    className={`mt-8 text-2xl font-medium ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  7. Передача данных третьим лицам
                </h2>
                <p
                    className={`mt-4 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Мы не передаем персональные данные третьим лицам, за исключением
                  следующих случаев:
                </p>
                <ul
                    className={`mt-4 list-disc pl-6 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  <li>
                    Для выполнения обязательств перед пользователем (например,
                    передача данных платежным системам).
                  </li>
                  <li>
                    По требованию уполномоченных органов на основании действующего
                    законодательства РФ.
                  </li>
                </ul>

                <h2
                    className={`mt-8 text-2xl font-medium ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  8. Права пользователей
                </h2>
                <p
                    className={`mt-4 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Пользователь имеет право:
                </p>
                <ul
                    className={`mt-4 list-disc pl-6 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  <li>
                    Изменить свои персональные данные (email, пароль, никнейм) в
                    личном кабинете.
                  </li>
                  <li>
                    Отозвать согласие на обработку персональных данных, направив
                    запрос через форму обратной связи.
                  </li>
                  <li>
                    Запросить удаление своей учетной записи и всех связанных с ней
                    данных.
                  </li>
                </ul>

                <h2
                    className={`mt-8 text-2xl font-medium ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  9. Трансграничная передача данных
                </h2>
                <p
                    className={`mt-4 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Мы не осуществляем трансграничную передачу персональных данных.
                  Все данные хранятся на серверах, расположенных в Российской
                  Федерации.
                </p>

                <h2
                    className={`mt-8 text-2xl font-medium ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  10. Изменения в политике конфиденциальности
                </h2>
                <p
                    className={`mt-4 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Мы оставляем за собой право вносить изменения в настоящую Политику.
                  Все изменения вступают в силу с момента их публикации на сайте.
                  Уведомления об изменениях будут отправлены на email пользователя.
                </p>

                <h2
                    className={`mt-8 text-2xl font-medium ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  11. Контакты
                </h2>
                <p
                    className={`mt-4 text-lg/8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  Если у вас возникли вопросы или предложения по поводу обработки
                  ваших персональных данных, вы можете связаться с нами через форму
                  обратной связи на странице «Обратная связь» нашего сайта.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
