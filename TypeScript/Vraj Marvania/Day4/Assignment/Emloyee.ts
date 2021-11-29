// Store 5 Employee Data(ID,Name,City,DOJ) in one Array. Search the employee with ID.
interface emp{
    Emp_Id: number;
    Emp_Name: string;
    Emp_City: string;
    Emp_DoJ: Date
}

export var Employee: emp[] = [];

Employee.push({
  Emp_Id: 1,
  Emp_Name: "vishal",
  Emp_City: "Mumbai",
  Emp_DoJ: new Date("10-03-2000"),
},
{
    Emp_Id: 2,
    Emp_Name: "vishal",
    Emp_City: "ahemdabad",
    Emp_DoJ: new Date("10-03-2010"),
  },{
    Emp_Id: 3,
    Emp_Name: "vishal",
    Emp_City: "ahemdabad",
    Emp_DoJ: new Date("10-03-2021"),
  },{
    Emp_Id: 4,
    Emp_Name: "vishal",
    Emp_City: "Mumbai",
    Emp_DoJ: new Date("10-03-2023"),
  });

