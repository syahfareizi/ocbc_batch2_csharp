USE [master]
GO
/****** Object:  Database [nama_staf]    Script Date: 25/11/2021 01:46:27 ******/
CREATE DATABASE [nama_staf]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'nama_staf', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER01\MSSQL\DATA\nama_staf.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'nama_staf_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER01\MSSQL\DATA\nama_staf_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [nama_staf] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [nama_staf].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [nama_staf] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [nama_staf] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [nama_staf] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [nama_staf] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [nama_staf] SET ARITHABORT OFF 
GO
ALTER DATABASE [nama_staf] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [nama_staf] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [nama_staf] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [nama_staf] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [nama_staf] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [nama_staf] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [nama_staf] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [nama_staf] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [nama_staf] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [nama_staf] SET  ENABLE_BROKER 
GO
ALTER DATABASE [nama_staf] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [nama_staf] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [nama_staf] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [nama_staf] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [nama_staf] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [nama_staf] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [nama_staf] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [nama_staf] SET RECOVERY FULL 
GO
ALTER DATABASE [nama_staf] SET  MULTI_USER 
GO
ALTER DATABASE [nama_staf] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [nama_staf] SET DB_CHAINING OFF 
GO
ALTER DATABASE [nama_staf] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [nama_staf] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [nama_staf] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [nama_staf] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'nama_staf', N'ON'
GO
ALTER DATABASE [nama_staf] SET QUERY_STORE = OFF
GO
USE [nama_staf]
GO
/****** Object:  Table [dbo].[data_staf]    Script Date: 25/11/2021 01:46:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[data_staf](
	[nik] [int] NOT NULL,
	[nama] [varchar](50) NULL,
	[alamat] [varchar](150) NULL,
	[handphone] [varchar](15) NULL,
	[joindate] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[nik] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[stafoutsource]    Script Date: 25/11/2021 01:46:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[stafoutsource](
	[nik] [int] NOT NULL,
	[nama] [varchar](50) NULL,
	[alamat] [varchar](150) NULL,
	[handphone] [varchar](15) NULL,
	[joindate] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[nik] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [nama_staf] SET  READ_WRITE 
GO
