export {}
type products = {
    id: number,
    name: string
}
const a: number = 10;
const b: number = 2000;
const name: string = "Phạm Quốc Toản";
const age: number = 20;
const status: boolean =  true;
const info: products = {id: 1, name: 'toan'};
const stringArr: string[] = ["1", "a", "c"];
const numberArr: number[] = [1, 2, 3, 4];
const objectArr: object[] = [{id: 1}, {id: 2}];


function sum(numA: number, numB: number): number {
    return numA + numB;
}

sum(a, b);
