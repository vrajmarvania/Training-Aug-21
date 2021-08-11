--Update Queries:

SELECT * INTO Employees1 FROM Employees

-- task 1
UPDATE Employees1 SET Email= 'not available';
-- task 2
UPDATE Employees1 SET Email= 'not available',CommissionPct=0.10;
-- task 3
UPDATE Employees1 SET Email= 'not available',CommissionPct=0.10 where  DepartmentID=  110
-- task 4
UPDATE Employees1 SET Email= 'not available'where  DepartmentID= 80 and CommissionPct <0.20
-- task 5
UPDATE Employees1 SET Email= 'not available'where JObId='AC_ACCOUNT'
-- task 6
UPDATE Employees1SET salary= 8000 where EmployeeID=105 and Salary <5000
-- task 7
UPDATE Employees1 SET JobId='SH_CLERK' where EmployeeID=118 AND DepartmentID=30 AND NOT JobId LIKE 'SH%'
-- task 8
UPDATE Employees1 SET Salary= CASE DepartmentID WHEN 40 THEN Salary+(salary*0.25) WHEN 90 THEN Salary+(salary*0.15) WHEN 110 THEN Salary+(salary*0.10) ELSE salary END




-- Basic Select Queries:

-- task 1
select * from Employees
-- task 2
select FirstName, LastName from Employees
-- task 3
select FirstName 'Employee Name' from Employees where FirstName='alias'
-- task 4
select * from Employees where FirstName= 'Steven'
-- task 5
select *  from Employees where FirstName='Neena' or  FirstName='Lex'
--task 6
select *  from Employees where  not  FirstName='Neena'
--task 7
select *  from Employees where    Salary BETWEEN  5000 and 8000
--task 8
select  FirstName+' '+LastName AS name,Salary ,(Salary*12)/100 AS PF  from Employees
--task 9
SELECT * FROM Employees WHERE FirstName LIKE 'N%'
--task 10
SELECT DISTINCT DepartmentID FROM Employees
--task 11
SELECT * FROM Employees ORDER BY  FirstName DESC
--task 12
SELECT EmployeeID,FirstName+' '+LastName AS name,salary FROM Employees  ORDER by    salary ASC
--task 13
SELECT TOP 2 * FROM Employees  ORDER by salary DESC 
