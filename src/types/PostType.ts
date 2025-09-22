type Comment = {
    user: string;
    text: string;
    date: string;
}

type Post = {
    id: number;
    user: string;
    date: string;
    content: string;
    image: string;
    likes: number;
    comments: Comment[];
    hideComments?: boolean;
}

export type { Post, Comment };