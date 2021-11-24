// class--------------------------------------->
class Employee {
  E_Id: number;
  E_Name: string;
  constructor(e_Id: number, e_Name: string) {
    this.E_Id = e_Id;
    this.E_Name = e_Name;
  }
  get_Employee_Name(): string {
    return this.E_Name;
  }
}
var e1 = new Employee(23, 'vraj');
console.log(e1.get_Employee_Name());


// abstract  class----------------------->

abstract class Person {
  abstract name: string;

  display(): void {
    console.log(this.name);
  }
}

class Employee extends Person {
  name: string;
  empCode: number;

  constructor(name: string, code: number) {
    super(); // must call super()

    this.empCode = code;
    this.name = name;
  }
}

let emp: Person = new Employee("James", 100);
emp.display(); //James

//enum------------------------------->
enum PrintMedia {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book
}

function getMedia(mediaName: string): PrintMedia {
  if (mediaName === 'Forbes' || mediaName === 'Outlook') {
    return PrintMedia.Magazine;
  }
}

let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine

// Tuple--------------------------------------->

var tupledemo: [string, number][] = [[23, "edd"], [23, "edd"], [23, "edd"], [23, "edd"]]
console.log(a)

var employee: [number, string] = [1, "Steve"];

employee.push(2, "Bill");
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']

// retrieving value by index and performing an operation 
employee[1] = employee[1].concat(" Jobs");
console.log(employee); //Output: [1, 'Steve Jobs']

// union--------------------------------------->
var a: (number | string) = "wdwd"
console.log(a)

let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
code = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
empId = true; // Compiler Error

// union in function--------------------------------------->
function demo(data: number | string) {
  return data;
}
console.log(demo("ssd"));


// interface--------------------------------------->
interface emp {
  E_Id: number;
  E_Name: string;
  get_Employee_Name(): string;
}
class Employee implements emp {
  E_Id: number;
  E_Name: string;
  constructor(e_Id: number, e_Name: string) {
    this.E_Id = e_Id;
    this.E_Name = e_Name;
  }
  get_Employee_Name(): string {
    return this.E_Name;
  }
}
var e1 = new Employee(23, 'vraj');
console.log(e1.get_Employee_Name());

// interface as type--------------------------------------->

interface emp { value: string, key: number }
var a: emp = { key: 232, value: 'sasa' }
console.log(a)


// interface as function--------------------------------------->

interface demo { (no1: number, no2: number): number }
function add(no1: number, no2: number) {
  return no1 + no2;
}

var demoadd: demo = add
console.log(demoadd(2, 3))

// interface as extending--------------------------------------->

interface emp { value: string, key: number }

interface emo2 extends emp { key1: number }

var a: emo2 = { key: 232, key1: 232, value: 'sasa' }
console.log(a)


// function--------------------------------------->

function addd(a: number, b: number): number {
  return a + b;
}
addd(2, 3)


var addd = (a: number, b: number): number => {
  return a + b;
}
console.log(addd(2, 3))


// Overloads

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: any): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 },
];

let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);