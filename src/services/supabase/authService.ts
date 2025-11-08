import { supabase } from "../supabaseClient";

const authService = {
    signIn: async (email: string, password: string) => {},
    signOut: async () => {},
    signUp: async (email: string, password: string, additionalInfo: Omit<User, "id">) => {},
};

export default authService;
