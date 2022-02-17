import instance from "./config";

export const getAll = () => {
    const url = '/asm';
    return instance.get(url);
}
export const get = (id) => {
    const url = `/asm/${id}`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/asm/${id}`;
    return instance.delete(url);
}
export const add = (asm) => {
    const url = "/asm";
    return instance.post(url, asm);
}
export const edit = (asm) => {
    const url = `/asm/${asm.id}`;
    return instance.put(url, asm);
}