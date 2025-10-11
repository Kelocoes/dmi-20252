import type { User } from "../types/User";

import api from "./axios";

type LoginResponse = {
    ok: boolean;
    message?: string;
    user?: User;
};

const login = async (username: string, password: string): Promise<LoginResponse> => {
    const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data;
};

const loginAxios = async (username: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await api.post<LoginResponse>("/auth/login", { username, password });
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            return { ok: false, message: error.message };
        }
        return { ok: false, message: "An unknown error occurred" };
    }
};

export { login, loginAxios };
