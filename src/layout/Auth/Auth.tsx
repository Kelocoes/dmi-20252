import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Outlet } from "react-router";

type User = {
    username: string;
};

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(() => {
        const stored = localStorage.getItem("user");
        if (!stored) return null;
        try {
            return JSON.parse(stored) as User;
        } catch {
            localStorage.removeItem("user");
            return null;
        }
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const isAuthenticated = user !== null;

    return <AuthContext value={{ isAuthenticated, user, setUser }}>{children}</AuthContext>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};

export default function AuthLayout() {
    return (
        <AuthProvider>
            <div id="auth-layout">
                <h1>Auth Layout</h1>
                <Outlet />
            </div>
        </AuthProvider>
    );
}
