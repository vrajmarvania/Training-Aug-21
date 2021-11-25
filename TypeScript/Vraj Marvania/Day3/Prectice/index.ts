// Generics


function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

// without name
let myNumArr = getArray([100, 200, 300]); // OK
let myStrArr = getArray(["Hello", "World"]); // OK

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

myNumArr.push("Hi"); // Compiler Error
myStrArr.push(500); // Compiler Error
console.log(myNumArr)

//   Multiple Type Variables

function displayType<T, U>(id: T, name: U): void {
  console.log(typeof (id) + ", " + typeof (name));
}

displayType<number, string>(1, "Steve"); // number, string


// Generic with Non-generic Type Copy
function displayType<T>(id: T, name: string): void {
  console.log(typeof (id) + ", " + typeof (name));
}

displayType<number>(1, "Steve"); // number, string

// Generic Classes


class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};