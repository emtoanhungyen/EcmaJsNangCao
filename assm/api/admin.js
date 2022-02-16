import instance from "./config";

export const getAll = () => {
    const url = "/admin";
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/admin/${id}`;
    return instance.delete(url);
}
export const add = (post) => {
    const url = "/admin";
    return instance.post(url, post);
}