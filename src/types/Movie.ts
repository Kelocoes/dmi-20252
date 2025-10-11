export type Comment = {
    id: number;
    username: string;
    comment: string;
    createdAt: string;
};

export type Movie = {
    id: number;
    title: string;
    director: string;
    year: number;
    genre: string;
    comments: Comment[];
};
