import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "https://api.example.com";

const api = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
