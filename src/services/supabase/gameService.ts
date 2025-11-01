import type { Game, GameSupabase } from "../../types/game";

import { supabase } from "./config";

const mappEntityToGame = (entity: GameSupabase): Game => {
    return {
        id: entity.id,
        name: entity.name,
        description: entity.description,
        min_players: entity.min_players,
        max_players: entity.max_players,
        category: entity.category,
        imageUrl: entity.image_url,
        created_by: entity.user_id,
    };
};

const gameService = {
    getAll: async (): Promise<Game[]> => {
        const { data, error } = await supabase.from("games").select("*, user_id(*)");
        if (error) {
            throw new Error(error.message);
        }
        console.info("Fetched games:", data);
        return data.map(mappEntityToGame) || ([] as Game[]);
    },

    getById: async (id: number): Promise<Game | undefined> => {
        const { data, error } = await supabase.from("games").select("*, user_id(*)").eq("id", id).single();
        if (error) {
            throw new Error(error.message);
        }
        return data ? mappEntityToGame(data) : undefined;
    },

    create: async (game: Omit<Game, "id" | "created_by"> & { user_id: number; image_url?: string }): Promise<Game> => {
        const { data, error } = await supabase.from("games").insert(game).select("*").single();
        if (error) {
            throw new Error(error.message);
        }
        return mappEntityToGame(data);
    },
};

export default gameService;
