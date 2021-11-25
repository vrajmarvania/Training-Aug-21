export default function helloWorld() {
    console.log("Hello, world!");
  }

export var pi = 3.14;


export type Cat = { breed: string; yearOfBirth: number };
// 'createCatName' cannot be used as a value because it was imported using 'import type'.
export type Dog = { breeds: string[]; yearOfBirth: number };
export const createCatName = () => "fluffy";
 