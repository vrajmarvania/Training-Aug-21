CREATE TABLE Employee  (
Employee_Id INT PRIMARY KEY IDENTITY(1,1),
Name VARCHAR(10) NOT NULL,
PhoneNo VARCHAR(10) NOT NULL,
)

CREATE TABLE Inventory(
id INT PRIMARY KEY IDENTITY (1,1),
CAR_Name VARCHAR(15),
Item_qty INT,
Price money not null,
commission_PER int not null,
)

CREATE TABLE sales(
Sales_id INT PRIMARY KEY IDENTITY (1,1) ,
EMP_ID INT CONSTRAINT emp_forend REFERENCES Employee(Employee_Id) ,
inventory_ID INT CONSTRAINT inven_forend REFERENCES Inventory(id) ,
)

insert into Employee Values('Vraj',99999)
select * from Employee
insert into Inventory Values('i10',3,400000,10)
select * from Inventory
insert into sales Values(1,1)
select * from sales