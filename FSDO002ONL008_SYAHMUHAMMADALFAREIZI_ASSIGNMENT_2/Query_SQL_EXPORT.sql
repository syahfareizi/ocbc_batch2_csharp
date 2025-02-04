USE [master]
GO
/****** Object:  Database [db_bank]    Script Date: 25/11/2021 01:45:01 ******/
CREATE DATABASE [db_bank]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'db_bank', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER01\MSSQL\DATA\db_bank.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'db_bank_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER01\MSSQL\DATA\db_bank_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [db_bank] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [db_bank].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [db_bank] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [db_bank] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [db_bank] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [db_bank] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [db_bank] SET ARITHABORT OFF 
GO
ALTER DATABASE [db_bank] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [db_bank] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [db_bank] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [db_bank] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [db_bank] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [db_bank] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [db_bank] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [db_bank] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [db_bank] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [db_bank] SET  ENABLE_BROKER 
GO
ALTER DATABASE [db_bank] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [db_bank] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [db_bank] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [db_bank] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [db_bank] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [db_bank] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [db_bank] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [db_bank] SET RECOVERY FULL 
GO
ALTER DATABASE [db_bank] SET  MULTI_USER 
GO
ALTER DATABASE [db_bank] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [db_bank] SET DB_CHAINING OFF 
GO
ALTER DATABASE [db_bank] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [db_bank] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [db_bank] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [db_bank] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'db_bank', N'ON'
GO
ALTER DATABASE [db_bank] SET QUERY_STORE = OFF
GO
USE [db_bank]
GO
/****** Object:  Table [dbo].[customer]    Script Date: 25/11/2021 01:45:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[customer](
	[customerNumber] [int] IDENTITY(1,1) NOT NULL,
	[customerName] [varchar](50) NULL,
	[contactLastName] [varchar](15) NULL,
	[contactFirstName] [varchar](15) NOT NULL,
	[phone] [varchar](15) NULL,
	[addressLine1] [varchar](50) NULL,
	[addressLine2] [varchar](50) NULL,
	[city] [varchar](15) NULL,
	[states] [varchar](15) NULL,
	[postalCode] [int] NULL,
	[country] [varchar](15) NULL,
	[salesRepEmployeeNumber] [int] NULL,
	[creditLimit] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[customerNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[employees]    Script Date: 25/11/2021 01:45:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[employees](
	[employeeNumber] [int] IDENTITY(1,1) NOT NULL,
	[lastName] [varchar](20) NULL,
	[firstName] [varchar](20) NOT NULL,
	[extension] [varchar](20) NULL,
	[email] [varchar](30) NOT NULL,
	[officeCode] [int] NULL,
	[reportsTo] [int] NULL,
	[jobTitle] [varchar](20) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[employeeNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[offices]    Script Date: 25/11/2021 01:45:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[offices](
	[officeCode] [int] IDENTITY(1,1) NOT NULL,
	[officeCity] [varchar](30) NOT NULL,
	[officePhone] [varchar](15) NOT NULL,
	[officeAddressLine1] [varchar](30) NOT NULL,
	[officeAddressLine2] [varchar](30) NOT NULL,
	[officeCountry] [varchar](15) NOT NULL,
	[officePostalCode] [int] NOT NULL,
	[territory] [varchar](15) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[officeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[orderdetails]    Script Date: 25/11/2021 01:45:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orderdetails](
	[orderNumber] [int] NULL,
	[productCode] [int] NULL,
	[quantityOrdered] [int] NULL,
	[priceEach] [int] NULL,
	[orderLineNumber] [varchar](20) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[orders]    Script Date: 25/11/2021 01:45:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orders](
	[orderNumber] [int] IDENTITY(1,1) NOT NULL,
	[orderDate] [date] NOT NULL,
	[requiredDate] [date] NOT NULL,
	[shipped] [date] NOT NULL,
	[status] [varchar](15) NULL,
	[comments] [varchar](100) NULL,
	[customerNumber] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[orderNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[payments]    Script Date: 25/11/2021 01:45:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[payments](
	[customerNumber] [int] NULL,
	[checkNumber] [int] NOT NULL,
	[paymentDate] [date] NOT NULL,
	[amount] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[checkNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[productlines]    Script Date: 25/11/2021 01:45:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[productlines](
	[productLine] [varchar](15) NOT NULL,
	[textDescription] [varchar](50) NOT NULL,
	[htmlDescription] [varchar](50) NULL,
	[images] [varbinary](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[productLine] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[products]    Script Date: 25/11/2021 01:45:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[products](
	[productCode] [int] IDENTITY(1,1) NOT NULL,
	[productName] [varchar](25) NOT NULL,
	[productLine] [varchar](15) NOT NULL,
	[productScale] [varchar](15) NULL,
	[productVendor] [varchar](15) NULL,
	[productDescription] [varchar](100) NOT NULL,
	[quantityInStock] [int] NOT NULL,
	[buyPrice] [int] NOT NULL,
	[MSRP] [varchar](15) NULL,
PRIMARY KEY CLUSTERED 
(
	[productCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[customer]  WITH CHECK ADD FOREIGN KEY([salesRepEmployeeNumber])
REFERENCES [dbo].[employees] ([employeeNumber])
GO
ALTER TABLE [dbo].[employees]  WITH CHECK ADD FOREIGN KEY([officeCode])
REFERENCES [dbo].[offices] ([officeCode])
GO
ALTER TABLE [dbo].[employees]  WITH CHECK ADD FOREIGN KEY([reportsTo])
REFERENCES [dbo].[employees] ([employeeNumber])
GO
ALTER TABLE [dbo].[orderdetails]  WITH CHECK ADD FOREIGN KEY([orderNumber])
REFERENCES [dbo].[orders] ([orderNumber])
GO
ALTER TABLE [dbo].[orderdetails]  WITH CHECK ADD FOREIGN KEY([productCode])
REFERENCES [dbo].[products] ([productCode])
GO
ALTER TABLE [dbo].[orders]  WITH CHECK ADD FOREIGN KEY([customerNumber])
REFERENCES [dbo].[customer] ([customerNumber])
GO
ALTER TABLE [dbo].[payments]  WITH CHECK ADD FOREIGN KEY([customerNumber])
REFERENCES [dbo].[customer] ([customerNumber])
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD FOREIGN KEY([productLine])
REFERENCES [dbo].[productlines] ([productLine])
GO
USE [master]
GO
ALTER DATABASE [db_bank] SET  READ_WRITE 
GO
