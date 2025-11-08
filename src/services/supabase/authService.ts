import { supabase } from "./config";

const authService = {
    signUp: async (email: string, password: string, metadata?: { username?: string; birthdate?: string; bio?: string }) => {},

    signIn: async (email: string, password: string) => {},

    signOut: async () => {},

    getCurrentUser: async () => {},

    getSession: async () => {},

    forgotPassword: async (email: string) => {},

    handlePasswordReset: async (newPassword: string) => {},

    setSession: async (accessToken: string, refreshToken: string) => {},
};

export default authService;
