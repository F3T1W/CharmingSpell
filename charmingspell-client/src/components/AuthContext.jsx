import { createContext, useContext, useState, useEffect } from "react";
import apiClient from "../components/ApiClient";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    const response = await apiClient.get("/api/Test/auth/me");
                    setUser(response.data);
                }
            } catch (error) {
                console.error("Ошибка получения пользователя:", error);
                setUser(null);
                localStorage.removeItem("token");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await apiClient.post("/api/Test/auth/login", { email, password });
            const { token, user } = response.data;
            localStorage.setItem("token", token);
            setUser(user);
            return true; // Успех
        } catch (error) {
            console.error("Ошибка входа:", error.response?.data || error.message);
            return false; // Ошибка
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};