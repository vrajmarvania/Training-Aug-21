import { Employee } from "./Emloyee";
// var EmpData= new Map()

let EmpData = new Map();

for (var i in Employee) {
  EmpData.set(Employee[i].Emp_Id, Employee[i]);
}

// Store 5 Employee Data(ID,Name,City,DOJ) in one Array. Search the employee with ID.

function Get_Emp(Id) {
  if (EmpData.has(Id)){
    return EmpData.get(Id);
  }
  else {
    return "Employee Not Found";
  }
}
console.log(Get_Emp(3))

// Search the employees who has joined after year 2020

function Get_Emps_by_year(Year) {
  var E_info = [];
  EmpData.forEach((value) => {
    if (value.Emp_DoJ.getFullYear() > Year) {
      E_info.push(value);
    }
  });
  return E_info;
}

console.log(Get_Emps_by_year(2020));

// Search the employee who has joined after year 2020 and stays in Mumbai city

function Get_Emp_by_city(Year, City) {
  var E_info = [];
  EmpData.forEach((value) => {
    if (value.Emp_DoJ.getFullYear() > Year && value.Emp_City == City) {
      E_info.push(value);
    }
  });
  return E_info;
}

console.log(Get_Emp_by_city(2020, "Mumbai"));
