import type { MoviesResponse } from "../types/MoviesTypes";

import axios from "./axios";

const getMovies = async (): Promise<MoviesResponse> => {
    const response = await fetch("http://localhost:4567/api/movies");
    const data = await response.json();
    return data;
};

const getMoviesAxios = async (): Promise<MoviesResponse> => {
    const response = await axios.get<MoviesResponse>("/movies");
    return response.data;
};

export { getMovies, getMoviesAxios };
