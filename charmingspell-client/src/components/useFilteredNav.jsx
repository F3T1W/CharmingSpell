import { useAuth } from "./AuthContext.jsx";

export function useFilteredNav() {
    const { user } = useAuth();

    const allNav = [
        { name: "О нас", href: "/about" },
        { name: "Преимущества", href: "/features" },
        { name: "Магазин", href: "/shop" },
        { name: "Кастом", href: "/custom" },
        { name: "F.A.Q.", href: "/faq" },
    ];

    return allNav.filter((item) => {
        if (item.href === "/shop") {
            return user && user.role === "Admin";
        }
        return true;
    });
}