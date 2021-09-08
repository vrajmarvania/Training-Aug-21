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
