import instance from "./config";

export const getAll = () => {
    const url = '/asms';
    return instance.get(url);
}
export const get = (id) => {
    const url = `/asms/${id}`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/asms/${id}`;
    return instance.delete(url);
}
export const them = (post) => {
    const url = `/asms`;
    return instance.post(url, post);
}
export const sua = (post) => {
    const url = `/asms/${post.id}`;
    return instance.put(url, post);
}