import type { User } from "../../types/User";

import userService from "./userService";
import { supabase } from "./config";

const authService = {
    signUp: async (email: string, password: string, additionalInfo: Omit<User, "id">) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            console.error("Error signing up:", error);
            return {
                success: false,
                error: error.message,
                user: null,
            };
        }

        const resultCreate = await userService.createUser(additionalInfo);

        return {
            success: true,
            data,
            user: resultCreate,
        };
    },
    signOut: async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error("Error signing out:", error);
            return {
                success: false,
                error: error.message,
            };
        }

        return {
            success: true,
        };
    },
    signIn: async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error("Error signing in:", error);
            return {
                success: false,
                error: error.message,
                user: null,
            };
        }

        return {
            success: true,
            data,
        };
    },
};

export default authService;
