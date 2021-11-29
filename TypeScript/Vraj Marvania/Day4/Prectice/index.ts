let studentEntries = new Set();

//Add Values  
studentEntries.add("John");
studentEntries.add("Peter");
studentEntries.add("Gayle");
studentEntries.add("Kohli");
studentEntries.add("Dhawan");

//Returns Set data  
console.log(studentEntries);

//Check value is present or not  
console.log(studentEntries.has("Kohli"));
console.log(studentEntries.has(10));

//It returns size of Set  
console.log(studentEntries.size);

//Delete a value from set  
console.log(studentEntries.delete("Dhawan"));

//Clear whole Set  
studentEntries.clear();

//Returns Set data after clear method.  
console.log(studentEntries);


// map



let map = new Map();

map.set('1', 'abhishek');
map.set(1, 'www.javatpoint.com');
map.set(true, 'bool1');
map.set('2', 'ajay');

console.log("Value1= " + map.get(1));
console.log("Value2= " + map.get('1'));
console.log("Key is Present= " + map.has(3));
console.log("Size= " + map.size);
console.log("Delete value= " + map.delete(1));
console.log("New Size= " + map.size);


// Iterating Map Data

let ageMapping = new Map();

ageMapping.set("Rakesh", 40);
ageMapping.set("Abhishek", 25);
ageMapping.set("Amit", 30);

//Iterate over map keys  
for (let key of ageMapping.keys()) {
    console.log("Map Keys= " + key);
}
//Iterate over map values  
for (let value of ageMapping.values()) {
    console.log("Map Values= " + value);
}
console.log("The Map Enteries are: ");
//Iterate over map entries  
for (let entry of ageMapping.entries()) {
    console.log(entry[0], entry[1]);
}


// Date Object

// 1. new Date()

var date: Date = new Date();
console.log("Date = " + date); //Date = Tue Feb 05 2019 12:05:22 GMT+0530 (IST)  


var date: Date = new Date(2017, 4, 4, 17, 23, 42, 11);
date.setDate(13);
date.setMonth(13);
date.setFullYear(2013);
date.setHours(13);
date.setMinutes(13);
date.setSeconds(13);
console.log("Year = " + date.getFullYear());
console.log("Date = " + date.getDate());
console.log("Month = " + date.getMonth());
console.log("Day = " + date.getDay());
console.log("Hours = " + date.getHours());
console.log("Minutes = " + date.getMinutes());
console.log("Seconds = " + date.getSeconds());