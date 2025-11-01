import type { Role } from "../types/role";

import axiosInstance from "./axiosInstance";

const roleService = {
    getAll: async (): Promise<Role[]> => {
        const response = await axiosInstance.get<Role[]>("/roles.json");
        return response.data;
    },

    getById: async (id: number): Promise<Role | undefined> => {
        const response = await axiosInstance.get<Role[]>("/roles.json");
        return response.data.find((role) => role.id === id);
    },
};

export default roleService;
