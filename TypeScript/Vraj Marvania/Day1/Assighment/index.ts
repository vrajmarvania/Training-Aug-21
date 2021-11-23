// .  Store 5 employees’ data in one array (ID,FirstName,LastName,Address,Salary). Do the operation searching by indexnumber, EmployeeID, Insert the employee, delete the employee from the Array. Create one more array emp and join the value with above array. When display list combine firstname and lastname as fullname, From the address field flatnumber,city,state and should be splited.PF should be computed and total salary should be display.

var employee = [
    {
      ID: 1,
      FirstName: "vraj",
      LastName: "marvania",
      Address: "102,sasasa asasa asa,rajkot,gujrat",
      Salary: 23232,
    },
    {
      ID: 2,
      FirstName: "ketan",
      LastName: "demo",
      Address: "102,sasasa asasa asa,rajkot,gujrat",
      Salary: 232332,
    },
    {
      ID: 3,
      FirstName: "vishal",
      LastName: "kalariya",
      Address: "102,sasasa asasa asa,rajkot,gujrat",
      Salary: 23232,
    }, {
      ID: 4,
      FirstName: "chirag",
      LastName: "kata",
      Address: "102,sasasa asasa asa,rajkot,gujrat",
      Salary: 23232,
    }
  ];

// searching by indexnumber, EmployeeID,
var a=employee.filter(e=>e.ID==2)
console.log(a)


// Insert the employee
var data={
  ID: 5,
  FirstName: "chirag",
  LastName: "kata",
  Address: "102,sasasa asasa asa,rajkot,gujrat",
  Salary: 23232,
}
employee.push(data)
console.log(employee)



// delete the employee
for(var i = 0;i<employee.length;i++) { 
  if(employee[i].ID==1)
  {
    // delete employee[i]
  } 
}
console.log(employee)


// Create one more array emp and join the value with above array
var emp = [
  {
    ID: 101,
    FirstName: "vraj",
    LastName: "marvania",
    Address: "102,sasasa asasa asa,rajkot,gujrat",
    Salary: 23232,
  },
  {
    ID: 102,
    FirstName: "chirag",
    LastName: "demo",
    Address: "102,sasasa asasa asa,rajkot,gujrat",
    Salary: 232332,
  },{
    ID: 103,
    FirstName: "vishal",
    LastName: "dffemo",
    Address: "102,sasasa asasa asa,rajkot,gujrat",
    Salary: 2322332,
  }]


  
  var empdetails= employee.concat(emp)
  console.log(empdetails)



// When display list combine firstname and lastname as fullname
for(var j = 0;j<employee.length;j++) { 
  
  var temp= employee[j].FirstName +" "+ employee[j].LastName
  console.log({'fullname':temp})

}

// From the address field flatnumber,city,state and should be splited.
for(var j = 0;j<employee.length;j++) { 
  
  var  flateno = employee[j].Address.split(",",4)[0]
  var  address = employee[j].Address.split(",",4)[1]
  var  city = employee[j].Address.split(",",4)[2]
  var  state = employee[j].Address.split(",",4)[3]

  console.log({'flatnumber':flateno,'address':address,'city':city,'state':state})

}

// PF should be computed and total salary should be display
for(var j = 0;j<employee.length;j++) { 
  
   employee[j].Salary= employee[j].Salary-employee[j].Salary*.12
  console.log(employee[j].Salary*.12)
}
console.log(empdetails)
