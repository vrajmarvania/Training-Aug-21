CREATE TABLE job_History
(
EMPLOYEE_ID int not null PRIMARY KEY IDENTITY(1,1),
START_DATE date not null,
END_DATE varchar(10) NOT NULL CHECK(END_DATE LIKE '__%/%__%/%____'),
JOB_ID varchar(10) NOT NULL, 
DEPARTMENT_ID decimal(4,0) NOT NULL ,
)

INSERT INTO job_History(START_DATE,END_DATE,JOB_ID,DEPARTMENT_ID) VALUES ('02-02-2020','02/02/2020',1,1)
select * from job_History