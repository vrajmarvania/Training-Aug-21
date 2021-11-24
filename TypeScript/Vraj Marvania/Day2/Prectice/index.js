// class--------------------------------------->
var Employee = /** @class */ (function () {
    function Employee(e_Id, e_Name) {
        this.E_Id = e_Id;
        this.E_Name = e_Name;
    }
    Employee.prototype.get_Employee_Name = function () {
        return this.E_Name;
    };
    return Employee;
}());
var e1 = new Employee(23, 'vraj');
console.log(e1.get_Employee_Name());

class Animal {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }
}

new Animal("Cat").name;

// Method Overriding
class Car {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    run(speed: number = 0) {
        console.log("A " + this.name + " is moving at " + speed + " mph!");
    }
}

class Mercedes extends Car {

    constructor(name: string) {
        super(name);
    }

    run(speed = 150) {
        console.log('A Mercedes started')
        super.run(speed);
    }
}

class Honda extends Car {

    constructor(name: string) {
        super(name);
    }

    run(speed = 100) {
        console.log('A Honda started')
        super.run(speed);
    }
}

let mercObj = new Mercedes("Mercedes-Benz GLA");
let hondaObj = new Honda("Honda City")

mercObj.run();  // A Mercedes started A Mercedes-Benz GLA is moving at 150 mph!
hondaObj.run();

// abstract  class------>
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

// Tuple--------------------------------------->
var tupledemo = [[23, "edd"], [23, "edd"], [23, "edd"], [23, "edd"]];
console.log(a);

// push()
var employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill");
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']


// retrieving value by index and performing an operation 
employee[1] = employee[1].concat(" Jobs");
console.log(employee); //Output: [1, 'Steve Jobs']



// union--------------------------------------->
var a = "wdwd";
console.log(a);


// union in function--------------------------------------->
function demo(data) {
    return data;
}
console.log(demo("ssd"));
var Employee = /** @class */ (function () {
    function Employee(e_Id, e_Name) {
        this.E_Id = e_Id;
        this.E_Name = e_Name;
    }
    Employee.prototype.get_Employee_Name = function () {
        return this.E_Name;
    };
    return Employee;
}());
var e1 = new Employee(23, 'vraj');
console.log(e1.get_Employee_Name());
var a = { key: 232, value: 'sasa' };
console.log(a);
function add(no1, no2) {
    return no1 + no2;
}
var demoadd = add;
console.log(demoadd(2, 3));
var a = { key: 232, key1: 232, value: 'sasa' };
console.log(a);




// function--------------------------------------->
function addd(a, b) {
    return a + b;
}
addd(2, 3);
var addd = function (a, b) {
    return a + b;
};
console.log(addd(2, 3));
