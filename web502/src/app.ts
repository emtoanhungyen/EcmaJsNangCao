export {}

function show<T, U>(a: T, b: U): [T, U] {
    return [a , b];
}
show(2, 5);
show("Toan", "Pham");

const product = [
    {id: 1, name: "Product A"},
    {id: 2, name: "Product B"},
];
