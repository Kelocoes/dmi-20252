import { useEffect, useState } from "react";
import { Navigate } from "react-router";

import { useAuth } from "../../layout/Auth/Auth";
import type { Movie } from "../../types/Movie";
import { getMoviesAxios } from "../../services/moviesService";
import MoviesCard from "../../components/MoviesCard";

export default function Feed() {
    const { user, isAuthenticated } = useAuth();
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await getMoviesAxios();
            if (response.ok && response.movies) {
                setMovies(response.movies);
            } else {
                console.error(response.message || "Error fetching movies");
            }
        };
        fetchMovies();
    }, []);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div id="feed-page" className="flex flex-col items-center gap-4 min-h-screen">
            <h1>Feed Page</h1>
            <p className="text-2xl">Welcome, {user?.username}!</p>
            {movies.length > 0 ? (
                <div className="movies-list grid grid-cols-2 gap-4">
                    {movies.map((movie) => (
                        <MoviesCard key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : (
                <p>No movies found</p>
            )}
        </div>
    );
}
