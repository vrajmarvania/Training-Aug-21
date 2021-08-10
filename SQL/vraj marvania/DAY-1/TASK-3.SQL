O/****** Object:  Table [dbo].[jobs]    Script Date: 10-08-2021 22:44:23 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[jobs](
	[obId] [int] NOT NULL,
	[JobTitle] [varchar](1) NULL,
	[MinSalary] [money] NULL,
	[MaxSalary] [money] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[jobs] ADD  DEFAULT (' ') FOR [JobTitle]
GO

ALTER TABLE [dbo].[jobs] ADD  DEFAULT ((8000)) FOR [MinSalary]
GO

ALTER TABLE [dbo].[jobs] ADD  DEFAULT (NULL) FOR [MaxSalary]
GO