import type { User } from "../types/user";

import axiosInstance from "./axiosInstance";

const userService = {
    getAll: async (): Promise<User[]> => {
        const response = await axiosInstance.get<User[]>("/users.json");
        return response.data;
    },

    getById: async (id: number): Promise<User | undefined> => {
        const response = await axiosInstance.get<User[]>("/users.json");
        return response.data.find((user) => user.id === id);
    },
};

export default userService;
