import type { User } from "../../types/User";

import { supabase } from "./config";

const userService = {
    getUser: async (id: string) => {},
    createUser: async (user: Omit<User, "id">) => {},
};

export default userService;
