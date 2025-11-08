import type { User } from "./User";

export type Positions = {
    id: number;
    x: number;
    y: number;
    created_by: User;
};
