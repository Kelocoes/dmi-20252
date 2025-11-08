import type { User } from "../../types/User";

import { supabase } from "./config";

const userService = {
    getUserByEmail: async (email: string) => {},
    createUser: async (user: Omit<User, "id">) => {},
};

export default userService;
