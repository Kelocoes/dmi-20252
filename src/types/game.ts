import type { User } from "./user";

export interface Game {
    id: number;
    name: string;
    description: string;
    min_players: number;
    max_players: number;
    category: string;
    imageUrl?: string;
    created_by: User;
}

export interface GameSupabase {
    id: number;
    name: string;
    description: string;
    min_players: number;
    max_players: number;
    category: string;
    image_url: string;
    user_id: User;
}
