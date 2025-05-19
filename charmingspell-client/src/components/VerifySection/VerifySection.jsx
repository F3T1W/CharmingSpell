import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import apiClient from "../ApiClient";

export default function VerifySection() {
    const { isDarkMode } = useContext(ThemeContext);
    const { token } = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const verifyToken = async () => {
            setIsLoading(true);
            try {
                if (!token) {
                    setMessage("Токен не найден.");
                    return;
                }

                const response = await apiClient.get(`/api/test/verify/${token}`);

                if (response.status === 200) {
                    setMessage(response.data.message || "Аккаунт успешно подтвержден!");
                    setTimeout(() => navigate("/"), 3000);
                } else {
                    setMessage("Ошибка при верификации.");
                }
            } catch (error) {
                console.error("Ошибка верификации:", error);
                setMessage(
                    error.response?.data || "Произошла ошибка при верификации."
                );
                setTimeout(() => navigate("/"), 3000);
            } finally {
                setIsLoading(false);
            }
        };

        verifyToken();
    }, [token, navigate]);

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
                    Подтверждение аккаунта
                </h2>

                <div className="mt-8 space-y-6">
                    {isLoading ? (
                        <p
                            className={`text-center text-sm ${
                                isDarkMode ? "text-white" : "text-black"
                            }`}
                        >
                            Загрузка...
                        </p>
                    ) : (
                        <p
                            className={`text-center text-sm ${
                                isDarkMode ? "text-white" : "text-black"
                            }`}
                        >
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}