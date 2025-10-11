import { useState } from "react";

import type { Movie } from "../types/Movie";

export default function MoviesCard({ movie }: { movie: Movie }) {
    const [hideComments, setHideComments] = useState(true);
    return (
        <div className="card w-96 bg-base-200 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p>{movie.director}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary" onClick={() => setHideComments(!hideComments)}>
                        {hideComments ? "Show comments" : "Hide comments"}
                    </button>
                </div>
                <div className={`mt-4 ${hideComments ? "hidden" : ""}`}>
                    <h3 className="font-bold">Comments:</h3>
                    {movie.comments.length > 0 ? (
                        <ul className="list-disc list-inside">
                            {movie.comments.map((comment, index) => (
                                <li key={index}>{comment.comment}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No comments yet</p>
                    )}
                </div>
            </div>
        </div>
    );
}
