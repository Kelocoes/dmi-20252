import type { User } from "./UserType";

export type LoginResponse = {
    ok: boolean;
    message?: string;
    user?: User;
};
