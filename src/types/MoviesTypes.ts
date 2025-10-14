import type { Comment } from "./CommentTypes";

export type Movie = {
    id: number;
    title: string;
    director: string;
    year: number;
    genre: string;
    comments: Comment[];
};

export type MoviesResponse = {
    ok: boolean;
    message?: string;
    movies?: Movie[];
};
