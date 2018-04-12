import { Users } from "./User";

export interface AuthUser {
    tokenString: string;
    user: Users;
}