import type { User } from "./user";

export interface Comment {
    id: number;
    content: string;
    created_at: string;
    user: User;
    game: {
        id: number;
        name: string;
        description: string;
        min_players: number;
        max_players: number;
        category: string;
        imageUrl?: string;
    };
}
