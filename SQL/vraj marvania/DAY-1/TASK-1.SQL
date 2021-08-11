CREATE table Countrie
(
 CountryId int not null PRIMARY KEY IDENTITY(1,1) ,
 CountryName VARCHAR(50) NOT NULL CHECK(CountryName IN('Italy','India','China')), 
 RegionId  int  CONSTRAINT CK_RegionId UNIQUE(RegionId),
)

INSERT INTO Countrie(CountryName,RegionId) VALUES('Italy',4),('India',3)

select * from  Countrie