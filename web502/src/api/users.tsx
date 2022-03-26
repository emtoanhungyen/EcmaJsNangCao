import instance from "./instace";
import { TypeUser } from "../types/user";

export const addUser = (user: TypeUser) => {
    const url = "./users";
    return instance.post(url, user);
}