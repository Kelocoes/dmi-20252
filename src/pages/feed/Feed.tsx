import { Navigate } from "react-router";
import { useState, useEffect } from "react";

import { useAuth } from "../../layout/Auth/Auth";
import { getMovies, getMoviesAxios } from "../../services/moviesService";
import type { Movie } from "../../types/MoviesTypes";
import MovieCard from "../../components/MovieCard";

export default function Feed() {
    const { user, isAuthenticated } = useAuth();
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMoviesAxios();
            setMovies(data.movies ?? []);
        };
        fetchData();
    }, []);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div id="feed-page">
            <h1>Feed Page</h1>
            <p>Welcome, {user?.username}!</p>
            <div id="movie-container">
                {movies.map((movie: Movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}
