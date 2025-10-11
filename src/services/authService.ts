import type { User } from "../types/User";

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

export { login };
