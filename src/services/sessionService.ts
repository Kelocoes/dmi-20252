import type { Session } from "../types/session";

import axiosInstance from "./axiosInstance";

const sessionService = {
    getAll: async (): Promise<Session[]> => {
        const response = await axiosInstance.get<Session[]>("/sessions.json");
        return response.data;
    },

    getById: async (id: number): Promise<Session | undefined> => {
        const response = await axiosInstance.get<Session[]>("/sessions.json");
        return response.data.find((session) => session.id === id);
    },
};

export default sessionService;
