import { AuthType } from "../interfaces/auth";
import instance from "./instance";

export const signup = (user: any) => {
    return instance.post("/signup", user);
};