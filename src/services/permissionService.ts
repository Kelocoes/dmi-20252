import type { Permission } from "../types/permission";

import axiosInstance from "./axiosInstance";

const permissionService = {
    getAll: async (): Promise<Permission[]> => {
        const response = await axiosInstance.get<Permission[]>("/permissions.json");
        return response.data;
    },

    getById: async (id: number): Promise<Permission | undefined> => {
        const response = await axiosInstance.get<Permission[]>("/permissions.json");
        return response.data.find((permission) => permission.id === id);
    },
};

export default permissionService;
