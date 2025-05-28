import {useContext, useEffect} from "react";
import {ThemeContext} from "../components/ThemeContext.jsx";

export default function PublicOfferPage() {
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
              <h1
                  className={`mt-2 text-4xl font-semibold tracking-tight sm:text-5xl ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                Публичная оферта
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
                1.1. Настоящий документ является публичной офертой (далее —
                Оферта) индивидуального предпринимателя Матюшина В.С., являющегося
                плательщиком налога на профессиональный доход (далее — Продавец),
                и содержит все существенные условия договора купли-продажи
                цифровых товаров между Продавцом и любым физическим лицом,
                принявшим условия данной Оферты (далее — Покупатель).
              </p>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                1.2. Полным и безоговорочным принятием (акцептом) условий
                настоящей Оферты считается факт осуществления Покупателем оплаты
                за товары, размещенные на сайте{" "}
                <a
                    href="https://charmingspell.ru/"
                    className={`underline ${
                        isDarkMode ? "text-blue-300" : "text-blue-600"
                    }`}
                >
                  https://charmingspell.ru/
                </a>{" "}
                (далее — Сайт).
              </p>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                1.3. Настоящая Оферта регулируется и толкуется в соответствии с
                действующим законодательством Российской Федерации.
              </p>

              <h2
                  className={`mt-8 text-2xl font-medium ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                2. Предмет Оферты
              </h2>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                2.1. Продавец обязуется предоставить Покупателю доступ к
                цифровым товарам (аудиофайлы в формате .mp3), а Покупатель
                обязуется оплатить и использовать приобретенные товары в порядке
                и на условиях, предусмотренных настоящей Офертой.
              </p>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                2.2. Все существенные условия договора купли-продажи, включая
                описание товаров, их стоимость и порядок оплаты, указаны на Сайте.
              </p>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                2.3. Цифровые товары предоставляются Покупателю исключительно для
                личного использования. Использование товаров в коммерческих целях
                допускается только с письменного согласия Продавца.
              </p>

              <h2
                  className={`mt-8 text-2xl font-medium ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                3. Порядок оформления заказа
              </h2>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                3.1. Для оформления заказа Покупатель должен:
              </p>
              <ul
                  className={`mt-4 list-disc pl-6 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                <li>Выбрать товары на Сайте и добавить их в корзину.</li>
                <li>Указать получателя (себя или другого пользователя).</li>
                <li>
                  Оплатить заказ через платежную систему{" "}
                  <strong>ЮKassa</strong>.
                </li>
              </ul>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                3.2. После успешной оплаты Покупатель получает доступ к
                скачиванию приобретенных товаров через личный кабинет на Сайте.
              </p>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                3.3. Продавец не несет ответственности за ошибки Покупателя при
                оформлении заказа (например, указание неверных данных
                получателя).
              </p>

              <h2
                  className={`mt-8 text-2xl font-medium ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                4. Цена и порядок оплаты
              </h2>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                4.1. Цены на товары указаны на Сайте в рублях РФ и включают налог
                на профессиональный доход.
              </p>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                4.2. Оплата производится через платежную систему{" "}
                <strong>ЮKassa</strong> с использованием доступных способов
                оплаты (банковские карты, электронные кошельки и др.).
              </p>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                4.3. Моментом оплаты считается зачисление денежных средств на
                расчетный счет Продавца.
              </p>

              <h2
                  className={`mt-8 text-2xl font-medium ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                5. Права и обязанности сторон
              </h2>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                <strong>5.1. Продавец обязуется:</strong>
              </p>
              <ul
                  className={`mt-4 list-disc pl-6 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                <li>
                  Обеспечивать работоспособность Сайта и возможность скачивания
                  приобретенных товаров.
                </li>
                <li>Предоставлять качественные товары, соответствующие описанию.</li>
                <li>
                  Защищать персональные данные Покупателя в соответствии с
                  Политикой конфиденциальности.
                </li>
              </ul>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                <strong>5.2. Покупатель обязуется:</strong>
              </p>
              <ul
                  className={`mt-4 list-disc pl-6 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                <li>
                  Оплачивать товары в порядке, предусмотренном настоящей Офертой.
                </li>
                <li>
                  Не распространять приобретенные товары в свободном доступе.
                </li>
                <li>
                  Использовать товары исключительно для личных целей, если иное не
                  согласовано с Продавцом.
                </li>
              </ul>

              <h2
                  className={`mt-8 text-2xl font-medium ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                6. Возврат товара и денежных средств
              </h2>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                6.1. Возврат денежных средств за приобретенные цифровые товары не
                предусмотрен, за исключением случаев, установленных
                законодательством РФ.
              </p>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                6.2. В случае технической невозможности предоставления доступа к
                товару (например, из-за сбоя на Сайте) Продавец обязуется устранить
                проблему в течение 24 часов. Если проблема не устранена,
                Покупатель вправе потребовать возврата денежных средств.
              </p>

              <h2
                  className={`mt-8 text-2xl font-medium ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                7. Ответственность сторон
              </h2>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                7.1. Продавец несет ответственность за:
              </p>
              <ul
                  className={`mt-4 list-disc pl-6 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                <li>Качество предоставляемых товаров.</li>
                <li>
                  Работоспособность Сайта и возможность скачивания товаров.
                </li>
              </ul>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                7.2. Продавец не несет ответственности за:
              </p>
              <ul
                  className={`mt-4 list-disc pl-6 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                <li>Нарушение условий Оферты по вине Покупателя.</li>
                <li>
                  Распространение Покупателем приобретенных товаров в свободном
                  доступе.
                </li>
              </ul>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                7.3. Покупатель несет ответственность за:
              </p>
              <ul
                  className={`mt-4 list-disc pl-6 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                <li>Достоверность предоставленных данных.</li>
                <li>Нарушение условий настоящей Оферты.</li>
              </ul>

              <h2
                  className={`mt-8 text-2xl font-medium ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                8. Разрешение споров
              </h2>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                8.1. Все споры и разногласия, возникающие между сторонами,
                решаются в досудебном порядке.
              </p>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                8.2. При невозможности достижения соглашения спор передается на
                рассмотрение в суд по месту нахождения Продавца.
              </p>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                8.3. К отношениям между Продавцом и Покупателем применяется
                законодательство Российской Федерации.
              </p>

              <h2
                  className={`mt-8 text-2xl font-medium ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                9. Изменение условий Оферты
              </h2>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                9.1. Продавец оставляет за собой право вносить изменения в
                настоящую Оферту.
              </p>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                9.2. Изменения вступают в силу с момента их публикации на Сайте.
              </p>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                9.3. Покупатель обязуется самостоятельно отслеживать изменения в
                Оферте.
              </p>

              <h2
                  className={`mt-8 text-2xl font-medium ${
                      isDarkMode ? "text-white" : "text-black"
                  }`}
              >
                10. Заключительные положения
              </h2>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                10.1. Настоящая Оферта действует бессрочно до момента ее отзыва или
                замены новой редакцией.
              </p>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                10.2. Все вопросы по настоящей Оферте можно направлять через форму
                обратной связи на Сайте или на электронную почту:{" "}
                <a
                    href="mailto:particular0010abyss@gmail.com"
                    className={`underline ${
                        isDarkMode ? "text-blue-300" : "text-blue-600"
                    }`}
                >
                  particular0010abyss@gmail.com
                </a>
                .
              </p>
              <p
                  className={`mt-4 text-lg/8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                10.3. Текущая версия Оферты доступна по адресу:{" "}
                <a
                    href="https://charmingspell.ru/publicOffer/"
                    className={`underline ${
                        isDarkMode ? "text-blue-300" : "text-blue-600"
                    }`}
                >
                  https://charmingspell.ru/publicOffer/
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
