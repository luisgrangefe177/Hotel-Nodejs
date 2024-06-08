-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: db_hotel
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_rooms`
--

DROP TABLE IF EXISTS `tb_rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_rooms` (
  `tr_id` int NOT NULL AUTO_INCREMENT,
  `tr_nameperson` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tr_numRoom` int NOT NULL,
  `tr_typeroom` int NOT NULL,
  `tr_starDate` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tr_dateEnd` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tr_letterRoom` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `tr_catDays` int NOT NULL DEFAULT '0',
  `tr_costRom` bigint NOT NULL DEFAULT '0',
  `tr_costTotal` bigint NOT NULL DEFAULT '0',
  `tr_complet` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`tr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_rooms`
--

LOCK TABLES `tb_rooms` WRITE;
/*!40000 ALTER TABLE `tb_rooms` DISABLE KEYS */;
INSERT INTO `tb_rooms` VALUES (1,'Juan Luis',78,2,'2024-05-25','2024-05-30','B',5,59000,285000,1),(3,'Lorena Diaz',32,1,'2024-05-25','2024-05-30','A',5,59000,285000,0),(4,'Lorena Diaz',32,1,'2024-05-25','2024-05-30','A',5,59000,285000,0),(5,'Luis Carlos Mosquera ',23,2,'2024-06-01','2024-06-30','',0,0,0,1),(6,'Luis Carlos Mosquera ',23,2,'2024-06-01','2024-06-30','',0,0,0,1),(7,'Luis Carlos Mosquera ',34,2,'2024-06-01','2024-06-30','',0,0,0,1);
/*!40000 ALTER TABLE `tb_rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_users`
--

DROP TABLE IF EXISTS `tb_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_users` (
  `tr_id` int NOT NULL AUTO_INCREMENT,
  `tr_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tr_password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tr_last_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tr_email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tr_rol` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`tr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_users`
--

LOCK TABLES `tb_users` WRITE;
/*!40000 ALTER TABLE `tb_users` DISABLE KEYS */;
INSERT INTO `tb_users` VALUES (1,'Luis','$2b$10$hPd/kYaIt2iLDzB2SEv3ku6Ge7GRHIXVliu145Lbttp3QMw4UMICW','Mosquera','luis.bot@gmail.com','administrador'),(2,'Andres','$2b$10$0Xrkb.pKdn4kxelh5RJU9eGD7muoaSasTuVlesOK1F2a/RgJa2aTK','Mora','Andres.Mora@gmail.com','administrador');
/*!40000 ALTER TABLE `tb_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_hotel'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-08  0:40:02
