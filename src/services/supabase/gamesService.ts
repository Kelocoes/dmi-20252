import type { Game } from "../../types";

import supabase from "./config";

const gameService = {
    getAll: async (): Promise<Game[]> => {
        const { data, error } = await supabase.from("games").select("*, user_id(*)");

        if (error) {
            throw new Error("Error :c");
        }

        return data;
    },
    create: async (userData: Omit<Game, "id" | "created_by"> & { user_id: number }) => {
        const { data, error } = await supabase.from("games").insert(userData).select();

        if (error) {
            throw new Error("Error :c");
        }

        return data;
    },
};

export default gameService;
