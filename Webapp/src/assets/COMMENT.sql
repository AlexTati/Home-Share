-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mer. 13 nov. 2019 à 21:46
-- Version du serveur :  10.2.10-MariaDB
-- Version de PHP :  7.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `homeshare`
--

-- --------------------------------------------------------

--
-- Structure de la table `COMMENT`
--

CREATE TABLE `COMMENT` (
  `Id` int(11) NOT NULL,
  `Text` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `Creation_date` datetime DEFAULT current_timestamp(),
  `Note` int(11) DEFAULT NULL,
  `Status` int(11) NOT NULL,
  `Booking_id` int(11) NOT NULL,
  `Membre_id` int(11) NOT NULL,
  `House_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `COMMENT`
--
ALTER TABLE `COMMENT`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Booking_id` (`Booking_id`),
  ADD KEY `Membre_id` (`Membre_id`),
  ADD KEY `House_id` (`House_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `COMMENT`
--
ALTER TABLE `COMMENT`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `COMMENT`
--
ALTER TABLE `COMMENT`
  ADD CONSTRAINT `COMMENT_ibfk_1` FOREIGN KEY (`Booking_id`) REFERENCES `BOOKING` (`Id`),
  ADD CONSTRAINT `COMMENT_ibfk_2` FOREIGN KEY (`Membre_id`) REFERENCES `MEMBRE` (`Id`),
  ADD CONSTRAINT `COMMENT_ibfk_3` FOREIGN KEY (`House_id`) REFERENCES `HOUSE` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
