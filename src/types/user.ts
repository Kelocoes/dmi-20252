import type { Role } from "./role";

export interface User {
    id: number;
    username: string;
    email: string;
    password?: string;
    bio?: string;
    created_at: string;
    role: Role;
    birthdate: string;
}
