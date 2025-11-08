import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "/data",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor para requests
axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor para responses
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Manejo global de errores
        if (error.response) {
            // El servidor respondió con un código de error
            console.error("Error response:", error.response.status, error.response.data);
        } else if (error.request) {
            // La petición fue hecha pero no hubo respuesta
            console.error("Error request:", error.request);
        } else {
            // Algo pasó al configurar la petición
            console.error("Error:", error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
