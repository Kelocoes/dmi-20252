import type { RolePermission } from "../types/rolePermission";

import axiosInstance from "./axiosInstance";

const rolePermissionService = {
    getAll: async (): Promise<RolePermission[]> => {
        const response = await axiosInstance.get<RolePermission[]>("/role_permissions.json");
        return response.data;
    },

    getById: async (id: number): Promise<RolePermission | undefined> => {
        const response = await axiosInstance.get<RolePermission[]>("/role_permissions.json");
        return response.data.find((rp) => rp.id === id);
    },
};

export default rolePermissionService;
