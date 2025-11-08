import type { User } from "../../types/User";

import { supabase } from "./config";

const userService = {
    getUserByEmail: async (email: string) => {
        const { data, error } = await supabase.from("users_polloc").select("*").eq("email", email).single();

        if (error) {
            console.error("Error fetching user:", error);
            return null;
        }

        return data;
    },
    createUser: async (user: Omit<User, "id">) => {
        const { data, error } = await supabase.from("users_polloc").insert({
            email: user.email,
            username: user.username,
            letter: user.letter,
            color: user.color,
        }).single();

        if (error) {
            console.error("Error creating user:", error);
            return null;
        }

        return data;
    },
};

export default userService;
