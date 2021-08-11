CREATE TABLE Employee 
(
Employee_Id INT PRIMARY KEY IDENTITY(1,1),
Employee_Name VARCHAR(10) NOT NULL,
Employee_Email VARCHAR(25) NULL ,
Employee_PhoneNo INT NOT NULL,
Employee_AGE INT NULL,
)

CREATE TABLE Inventory
(
id INT PRIMARY KEY IDENTITY (1,1),
CAR_Name VARCHAR(15),
Item_qty INT,
Price money not null,
commission_percentage int,
)


CREATE TABLE Customer
(
	Customer_Id INT NOT NULL CONSTRAINT PKCustomer_Id PRIMARY KEY IDENTITY(1,1), 
	Customer_Name VARCHAR(50) NOT NULL,
	CustomerEmail VARCHAR(255) NOT NULL ,
	CustomerPhoneNumber NUMERIC(12) NOT NULL,


	)

CREATE TABLE Sales
(
Sales_id INT NOT NULL PRIMARY KEY IDENTITY (1,1) ,
EMP_ID INT NOT NULL CONSTRAINT emp_forend REFERENCES Employee(Employee_Id) ,
ID INT NOT NULL CONSTRAINT inven_forend REFERENCES Inventory(id) ,
Customer_Id  INT NOT NULL  CONSTRAINT FKCustomer_Id REFERENCES Customer(Customer_Id) ,
)


insert into Employee Values('Vraj','TEST@TEST.COM',99999,20),('BRIJEN','B@B.COM',88888,22)
select * from Employee
insert into Inventory Values('i10',3,400000,10),('120',1,350000,23)
select * from Inventory
select * from Customer 
insert into Customer Values('shreaysh','s@s.com',22222),('shivang','sm@sm.com',11111)
insert into sales Values(1,1,1)
select * from sales