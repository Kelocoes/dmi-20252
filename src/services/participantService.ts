import type { Participant } from "../types/participant";

import axiosInstance from "./axiosInstance";

const participantService = {
    getAll: async (): Promise<Participant[]> => {
        const response = await axiosInstance.get<Participant[]>("/participants.json");
        return response.data;
    },

    getById: async (id: number): Promise<Participant | undefined> => {
        const response = await axiosInstance.get<Participant[]>("/participants.json");
        return response.data.find((participant) => participant.id === id);
    },
};

export default participantService;
