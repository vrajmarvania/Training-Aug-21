--TABLE JOB


SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[job](
	[Job_Id] [int] NOT NULL,
	[job_type] [varchar](10) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Job_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

-- TABLE  Department

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Department](
	[Department_Id] [int] NOT NULL,
	[Department_name] [varchar](10) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Department_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

-- TABLE employees

CREATE TABLE employees 
(
Employee_Id INT PRIMARY KEY IDENTITY(1,1), 
FirstName VARCHAR(10),
LastName VARCHAR(10), 
Email VARCHAR(20), 
PhoneNumber VARCHAR(10), 
Hire_Date DATE, 
Job_Id INT CONSTRAINT fkjob REFERENCES Job(Job_Id) on update cascade, 
Salary INT, 
Commission INT , 
Manager_Id INT , 
Department_Id INT CONSTRAINT fkDepartment REFERENCES Department(Department_Id) on update cascade

)



insert into job (Job_id,job_type) Values(1,'php')
insert into Department(Department_Id,Department_name) values(1,'net')
-- FOR ERROR 
insert into employees(Employee_Id,FirstName,LastName,Email,PhoneNumber,Hire_Date,Job_Id,Commission,Manager_Id,Salary,Department_Id) 
values(1,'vraj','m','m@gmail.com',9999999999,'02-02-2020',2,1,1,11,3)
-- FOR ADD DATA
insert into employees(Employee_Id,FirstName,LastName,Email,PhoneNumber,Hire_Date,Job_Id,Commission,Manager_Id,Salary,Department_Id) 
values(1,'vraj','m','m@gmail.com',9999999999,'02-02-2020',1,1,1,11,1)

select * from Department
select * from job
select * from employees