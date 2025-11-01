import type { Comment } from "../types/comment";

import axiosInstance from "./axiosInstance";

const commentService = {
    getAll: async (): Promise<Comment[]> => {
        const response = await axiosInstance.get<Comment[]>("/comments.json");
        return response.data;
    },

    getById: async (id: number): Promise<Comment | undefined> => {
        const response = await axiosInstance.get<Comment[]>("/comments.json");
        return response.data.find((comment) => comment.id === id);
    },
};

export default commentService;
