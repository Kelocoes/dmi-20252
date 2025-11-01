import type { Game } from "../types/game";

import axiosInstance from "./axiosInstance";

const gameService = {
    getAll: async (): Promise<Game[]> => {
        const response = await axiosInstance.get<Game[]>("/games.json");
        return response.data;
    },

    getById: async (id: number): Promise<Game | undefined> => {
        const response = await axiosInstance.get<Game[]>("/games.json");
        return response.data.find((game) => game.id === id);
    },
};

export default gameService;
