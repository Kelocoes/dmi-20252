import type { LoginResponse } from "../types/AuthTypes";

import axios from "./axios";

const login = async (username: string, password: string): Promise<LoginResponse> => {
    const response = await fetch("http://localhost:4567/api/auth/login", {
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
        const response = await axios.post<LoginResponse>("/auth/login", { username, password });
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        return { ok: false, message: "Network error" };
    }
};

export { login, loginAxios };
