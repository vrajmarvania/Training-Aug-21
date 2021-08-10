CREATE table Countrie
(
 CountryId int CONSTRAINT AK_CONTRYID UNIQUE(CountryId),
 CountryName VARCHAR(50)  CHECK(CountryName IN('Italy','India','China')),
 RegionId  int  CONSTRAINT AK_RegionId UNIQUE(RegionId),
)

INSERT INTO Countrie(CountryId,CountryName,RegionId) VALUES(2,'Italy',4)
select * from  Countrie