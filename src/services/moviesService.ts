import type { Movie } from "../types/Movie";

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

export { getMovies };
