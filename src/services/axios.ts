import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API,
    timeout: 5000,
    headers: { "Content-type": "application/json" },
});

export default instance;
