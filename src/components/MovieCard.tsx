import type { Movie } from "../types/MoviesTypes";

export default function MovieCard({ movie }: { movie: Movie }) {
    return (
        <div className="card w-96 bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p>{movie.director}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}
