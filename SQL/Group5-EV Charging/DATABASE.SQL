--TABLE
CREATE DATABASE EVcharging
USE EVCharging


CREATE TABLE ChargingStation
(
	StationID INT CONSTRAINT ChargingStation_StationID_PkAuto PRIMARY KEY IDENTITY(1,1),
	StationName VARCHAR(50) CONSTRAINT ChargingStation_StationName_NotNull NOT NULL,
	[Owner] VARCHAR (50) CONSTRAINT ChargingStation_Owner_NotNull NOT NULL,
	StatusID INT CONSTRAINT ChargingStation_StatusID_FK_NotNull FOREIGN KEY REFERENCES StationStatus(StatusID) ON DELETE SET NULL ON UPDATE CASCADE,
	Timing VARCHAR(50) CONSTRAINT ChargingStation_Timing_NotNull NOT NULL,
	[Address] VARCHAR (100) CONSTRAINT ChargingStation_Address_NotNull NOT NULL,
	Longitude DECIMAL(10,6) CONSTRAINT ChargingStation_Longitude_NotNull NOT NULL,
	Latitude DECIMAL(10,6) CONSTRAINT ChargingStation_Latitude_NotNull NOT NULL,
	CityID INT CONSTRAINT ChargingStation_City_FK_NotNull NOT NULL FOREIGN KEY REFERENCES City(CityID) ON DELETE NO ACTION ON UPDATE NO ACTION,
	IsDeleted BIT CONSTRAINT ChargingStation_IsDeleted_Chk NOT NULL CHECK (IsDeleted IN (0,1)) DEFAULT 0
)      


INSERT INTO  ChargingStation(StationName,Owner,StatusID,Timing,Address,Longitude,Latitude,CityID)
	VALUES
		('KKV','ANIL','2','6:00AM TO 9:30PM','KKV ROAD',22.293784, 70.784986,4),
		('C2','SHREYASH','2','24/7','RING ROAD',22.283909, 70.773710,3),
		('NOVA','Nikhil','3','7:00AM TO 9:00PM','CLUB ROAD',22.340855, 70.915440,2),
		('MG','Vikas','1','24/7','raiya road',22.995020, 72.572489,4),
		('TATA','Raj','5','24/7','university road',22.995022, 72.972489,1)



CREATE TABLE ConnectionPort   
(
	PortID    INT CONSTRAINT ConnectionPort_PortID_PkAuto PRIMARY KEY IDENTITY(1,1) ,
	StationId INT CONSTRAINT ConnectionPort_StationId_Fk FOREIGN KEY REFERENCES ChargingStation(StationID) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
	Port_Voltage DECIMAL(6,3)  CONSTRAINT ConnectionPort_Voltage_NotNull NOT NULL,
	ConnectionID INT  CONSTRAINT Connection_Type_Fk_NotNull FOREIGN KEY REFERENCES ConnectionType(TypeID) ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
	[Availability]  BIT  CONSTRAINT ConnectionPort_Availability_Chk NOT NULL CHECK ( [Availability] IN (0,1)),
	ChargesPerKWH SMALLMONEY  CONSTRAINT ConnectionPort_ChargesPerKWH_NotNull NOT NULL,
	IsDeleted BIT CONSTRAINT ConnectionPort_IsDeleted_Chk NOT NULL CHECK (IsDeleted IN (0,1)) DEFAULT 0
)


INSERT INTO ConnectionPort(StationId,Port_Voltage,ConnectionID,Availability,ChargesPerKWH) 
	VALUES
		(1,260,5,1,18.4),
		(1,260,5,1,18.4),
		(1,260,5,1,18.4),
		(1,240,2,1,19),
		(2,240,2,1,19),
		(2,240,2,1,19),
		(2,240,5,1,18.5),
		(2,260,5,1,18.4),
		(3,240,2,1,19),
		(3,240,2,1,19),
		(3,240,2,1,19),
		(3,240,5,1,18.5),
		(3,260,5,0,18.4),
		(3,240,9,0,17.2),
		(4,240,2,1,19),
		(4,240,2,0,19),
		(4,240,5,0,18.5),
		(4,260,5,1,18.4),
		(5,240,2,1,19),
		(5,240,2,1,19),
		(5,240,2,0,19),
		(5,240,5,1,18.5),
		(5,260,5,0,18.4),
		(5,240,9,0,17.2)  
	

CREATE TABLE ConnectionType	
(
	TypeID	INT CONSTRAINT  Connection_TypeID_PkAuto PRIMARY KEY IDENTITY(1,1),
	Type VARCHAR(30) CONSTRAINT Connection_Type_NotNull NOT NULL,
	IsDeleted BIT CONSTRAINT ConnectionType_IsDeleted_Chk NOT NULL CHECK (IsDeleted IN (0,1)) DEFAULT 0
)

INSERT INTO ConnectionType(Type) 
    VALUES
		('CCS-1'),
		('CCS-2'),
		('BG/T'),
		('Tesla Charger'),
		('CHAdeMO'),
		('GB/T'),
		('AC TYPE-1'),
		('AC TYPE-2'),
		('AC0001'),
		('AC PLUG POINT')


CREATE TABLE City
(
	CityID INT CONSTRAINT City_CityID_Pk PRIMARY KEY IDENTITY(1,1),
	CityName VARCHAR (25) CONSTRAINT City_CityName_NotNull NOT NULL,
	StateID INT CONSTRAINT City_StateID_FkNotNull NOT NULL FOREIGN KEY REFERENCES States(StateID) ON DELETE CASCADE ON UPDATE CASCADE,
	IsDeleted BIT CONSTRAINT City_IsDeleted_Chk NOT NULL CHECK (IsDeleted IN (0,1)) DEFAULT 0
)


INSERT INTO City(CityName,StateID) 
	VALUES
		('Ahmedabad',8),
		('Baroda',8),
		('Surat',8),
		('Rajkot',8),
		('Jamnagar',8),
		('Gandhinagar',8),
		('Mumbai',15),
		('Kalkata',28),
		('Chennai',25),
		('Pune',15),
		('Bengaluru',12),
		('Mysore',12),
		('Bhopal',14),
		('Indore',14),
		('Amritsar',21),
		('Jalandhar',21),
		('Chandigarh',21),
		('Jaypur',22),
		('Jaisalmer',22),
		('Jodhpur',22)



CREATE TABLE Customer
(
	CustomerID INT CONSTRAINT Customer_CustomerID_PkAuto PRIMARY KEY IDENTITY(1,1),
	[Name] VARCHAR (50) CONSTRAINT Customer_NameNull_NotNull NOT NULL,
	Make VARCHAR(25) CONSTRAINT Customer_Make_NotNull NOT NULL,
	Model VARCHAR(25) CONSTRAINT Customer_Model_NotNull NOT NULL,
	ConnectionID INT CONSTRAINT Customer_ConnectionID_FK_NotNull NOT NULL FOREIGN KEY REFERENCES ConnectionType(TypeID) ON DELETE NO ACTION ON UPDATE NO ACTION, 
	VehicalNo VARCHAR(17) CONSTRAINT Customer_VehicalNo_NotNull NOT NULL, 
	PhoneNumber NUMERIC(10) CONSTRAINT Customer_phonenumber_NotNull_Chk NOT NULL CHECK (PhoneNumber BETWEEN 1000000000 AND 9999999999), 
	EmailId VARCHAR(30) CONSTRAINT Customer_Email_Chk CHECK (EmailId LIKE '[a-z,0-9,_,-]%@[a-z]%.[a-z][a-z]%'),
	[Address] VARCHAR(100) CONSTRAINT Customer_Address_NotNull NOT NULL,
	Pincode NUMERIC(6) CONSTRAINT Customer_Pincode_NotNull NOT NULL,
	CityId INT CONSTRAINT Customer_City_FK_NotNull NOT NULL FOREIGN KEY REFERENCES City(CityID) ON DELETE NO ACTION ON UPDATE NO ACTION,
	IsDeleted BIT CONSTRAINT Customer_IsDeleted_Chk NOT NULL CHECK (IsDeleted IN (0,1)) DEFAULT 0
)


INSERT INTO Customer(Name,Make,Model,ConnectionID,VehicalNo,PhoneNumber,EmailId,Address,Pincode,CityId)
	VALUES
		('Harsh','Kia','Sonet',1,'WBA3X5C51ED235114',9998885555,'abcs222@gmail.com','Virat Nagar',520068,12),	
		('Jaydeep','Honada','City',2,'5N3AA08A95N863813',8988956234,'csdv55@gmail.com','M.G. Road',32008,1),
		('Kevin','Tata','Tigor',5,'19XFA1F56BE004421',8787874555,'sdddd455@gmail.com','Market Road',230532,7),
		('Rohit','Suzuki','Shwift',2,'2MEFM74V87X658365',9879875654,'ughgdf33@gmail.com','S.G. Highway',32008,1),
		('John','Renault','Kwid',5,'4T1BD1FK7FU102405',7878956520,'gfydhg222@gmail.com','Hospital Road',335009,3)



CREATE TABLE StationStatus
(
	StatusID INT CONSTRAINT StationStatus_StatusID_PkAuto PRIMARY KEY IDENTITY(1,1),
	StatusName VARCHAR(30) CONSTRAINT StationStatus_StatusName_NotNull NOT NULL,
	IsDeleted BIT CONSTRAINT StationStatus_IsDeleted_Chk NOT NULL CHECK (IsDeleted IN (0,1)) DEFAULT 0
)


INSERT INTO StationStatus(StatusName) 
	VALUES
		('Public'),
		('High power'),
		('Restricted'),
		('In use'),
		('Under Repair')


CREATE TABLE StationHasAminity
(
	StationHasAminityID INT CONSTRAINT StationHasAminity_StationHasAminityID_PkAuto PRIMARY KEY IDENTITY(1,1),
	StationId INT CONSTRAINT StationHasAminity_StationId_FkNotNull NOT NULL FOREIGN KEY REFERENCES ChargingStation(StationID) ON DELETE CASCADE ON UPDATE CASCADE,
	AminityID INT CONSTRAINT StationHasAminity_StatusID_FK_NotNull NOT NULL FOREIGN KEY REFERENCES Aminities(AminityID) ON DELETE CASCADE ON UPDATE CASCADE,
	IsDeleted BIT CONSTRAINT StationHasAminity_IsDeleted_Chk NOT NULL CHECK (IsDeleted IN (0,1)) DEFAULT 0
)


INSERT INTO StationHasAminity(StationId,AminityID)
	VALUES 
		(1,1),(1,2),(1,4),(1,5),(1,7),(2,4),(2,3),(2,1),(3,7),(4,6),(5,2)

