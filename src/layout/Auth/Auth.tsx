import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Outlet } from "react-router";

type User = {
    id: string;
    username?: string;
    email: string;
    password?: string;
};

type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    login: (_email: string, _password: string) => void;
    register: (_username: string, _email: string, _password: string) => void;
    isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const login = (email: string, password: string) => {
        // Simulación de login
        const userData = { id: "1", email, password };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const register = (username: string, email: string, password: string) => {
        // Simulación de registro
        const userData = { id: "1", username, email, password };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Error parsing stored user:", error);
                localStorage.removeItem("user");
                setUser(null);
            }
        } else {
            setUser(null);
        }
        setIsLoading(false);
    }, []);

    const isAuthenticated = user !== null;

    return <AuthContext.Provider value={{ user, isAuthenticated, login, register, isLoading }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};

export default function Auth() {
    return (
        <AuthProvider>
            <div id="auth-layout">
                <h1>Auth Layout</h1>
                <Outlet />
            </div>
        </AuthProvider>
    );
}
