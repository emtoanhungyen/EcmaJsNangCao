import instance from "./config";

export const themSP = (post) => {
    const url = "/products";
    return instance.post(url, post);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};
export const xoaSP = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};