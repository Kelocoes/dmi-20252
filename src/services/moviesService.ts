import type { Movie } from "../types/Movie";

import api from "./axios";

type MovieResponse = {
    ok: boolean;
    movies?: Movie[];
    message?: string;
};

const getMovies = async (): Promise<MovieResponse> => {
    const response = await fetch("http://localhost:3001/api/movies");
    const data = await response.json();
    return data;
};

const getMoviesAxios = async (): Promise<MovieResponse> => {
    try {
        const response = await api.get<MovieResponse>("/movies");
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            return { ok: false, message: error.message };
        }
        return { ok: false, message: "An unknown error occurred" };
    }
};

export { getMovies, getMoviesAxios };
