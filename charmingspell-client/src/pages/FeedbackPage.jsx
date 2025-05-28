import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../components/ThemeContext.jsx";
import apiClient from "../components/ApiClient.jsx";
import {Field, Label, Switch} from "@headlessui/react";

export default function FeedbackPage() {
  const { isDarkMode } = useContext(ThemeContext);
  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiClient.post("/api/test/send-email", formData);

      if (response.status === 200) {
        alert("Сообщение успешно отправлено!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" }); // Очистка формы
      } else {
        alert("Ошибка при отправке сообщения.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div
          className="relative h-screen flex items-center justify-center overflow-x-hidden"
          style={{
            background: isDarkMode
                ? "linear-gradient(to right, #1e293b, #0f172a)"
                : "linear-gradient(to right, #e2e8f0, #cbd5e1)",
          }}
      >
        <div className={`isolate px-6 pt-24 sm:py-28 lg:px-8`}>
          <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          ></div>
          <div className="mx-auto max-w-2xl text-center">
            <h2
                className={`text-4xl font-semibold tracking-tight text-balance ${
                    isDarkMode ? "text-white" : "text-black"
                } sm:text-5xl`}
            >
              Обратная связь
            </h2>
          </div>
          <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-xl sm:mt-8"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                    htmlFor="first-name"
                    className={`block text-sm/6 font-semibold ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  Имя
                </label>
                <div className="mt-2.5">
                  <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1
                     -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2
                      focus:-outline-offset-2 focus:outline-indigo-600"
                      required
                  />
                </div>
              </div>
              <div>
                <label
                    htmlFor="last-name"
                    className={`block text-sm/6 font-semibold ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  Фамилия
                </label>
                <div className="mt-2.5">
                  <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1
                     -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2
                      focus:-outline-offset-2 focus:outline-indigo-600"
                      required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                    htmlFor="email"
                    className={`block text-sm/6 font-semibold ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1
                     -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2
                      focus:-outline-offset-2 focus:outline-indigo-600"
                      required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                    htmlFor="message"
                    className={`block text-sm/6 font-semibold ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  Сообщение
                </label>
                <div className="mt-2.5">
              <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1
                   -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2
                    focus:-outline-offset-2 focus:outline-indigo-600"
                  defaultValue={""}
                  required
              />
                </div>
              </div>
              <Field className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1
                     ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2
                      focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600"
                  >
                <span
                    aria-hidden="true"
                    className="size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition
                     duration-200 ease-in-out group-data-checked:translate-x-3.5"
                />
                  </Switch>
                </div>
                <Label
                    className={`text-sm/6 ${
                        isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  Жми, чтобы согласиться с{" "}
                  <a
                      href="#"
                      className={`font-semibold ${
                          isDarkMode
                              ? "text-indigo-300 hover:text-indigo-500"
                              : "text-indigo-600 hover:text-indigo-900"
                      }`}
                  >
                    правилами&nbsp;пользования
                  </a>
                  .
                </Label>
              </Field>
            </div>
            <div className="mt-8">
              <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold
                 text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-indigo-600"
              >
                Обсудим!
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}
