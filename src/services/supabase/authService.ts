import type { User } from "../../types/User";

import userService from "./userService";
import { supabase } from "./config";

const authService = {
    signUp: async (email: string, password: string, additionalInfo: Omit<User, "id">) => {},
    signOut: async () => {},
    signIn: async (email: string, password: string) => {},
};

export default authService;
