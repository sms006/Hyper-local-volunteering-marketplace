-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2018 at 06:29 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sad_test1`
--

-- --------------------------------------------------------

--
-- Table structure for table `employer`
--

CREATE TABLE `employer` (
  `eid` int(4) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employer`
--

INSERT INTO `employer` (`eid`, `name`, `email`) VALUES
(1, 'sanketh', 'a@b.com'),
(8, 'Deepa', 'e@f.com'),
(3, 'Meghana', 'b@c.com'),
(4, 'Akash', 'c@d.com'),
(7, 'Deepa', 'e@f.com'),
(9, 'abcd', 'a@b.com'),
(10, 'abce', 'a@c.com'),
(11, 'abce', 'a@c.com'),
(12, 'abce', 'a@c.com');

-- --------------------------------------------------------

--
-- Table structure for table `marketplace`
--

CREATE TABLE `marketplace` (
  `workid` int(4) NOT NULL,
  `taskid` int(4) NOT NULL,
  `employerid` int(4) NOT NULL,
  `work_description` varchar(100) NOT NULL,
  `address` varchar(200) DEFAULT NULL,
  `lat` float(10,10) NOT NULL,
  `lng` float(10,10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `marketplace`
--

INSERT INTO `marketplace` (`workid`, `taskid`, `employerid`, `work_description`, `address`, `lat`, `lng`) VALUES
(4, 1, 2, 'sadc', NULL, 0.0000000000, 0.0000000000),
(5, 1, 10, 'asdfg', 'Heidelberg, Germany', 49.0000000000, 8.6724338531);

-- --------------------------------------------------------

--
-- Table structure for table `types_of_work`
--

CREATE TABLE `types_of_work` (
  `tid` int(2) NOT NULL,
  `work_type` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `types_of_work`
--

INSERT INTO `types_of_work` (`tid`, `work_type`) VALUES
(1, 'Disabled assistance '),
(2, 'Domestic help'),
(3, 'community event organizing '),
(4, 'environmental voluntary work');

-- --------------------------------------------------------

--
-- Table structure for table `volunteer`
--

CREATE TABLE `volunteer` (
  `vid` int(4) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` int(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employer`
--
ALTER TABLE `employer`
  ADD PRIMARY KEY (`eid`);

--
-- Indexes for table `marketplace`
--
ALTER TABLE `marketplace`
  ADD PRIMARY KEY (`workid`),
  ADD KEY `taskid` (`taskid`),
  ADD KEY `employerid` (`employerid`);

--
-- Indexes for table `types_of_work`
--
ALTER TABLE `types_of_work`
  ADD PRIMARY KEY (`tid`);

--
-- Indexes for table `volunteer`
--
ALTER TABLE `volunteer`
  ADD PRIMARY KEY (`vid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employer`
--
ALTER TABLE `employer`
  MODIFY `eid` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `marketplace`
--
ALTER TABLE `marketplace`
  MODIFY `workid` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `types_of_work`
--
ALTER TABLE `types_of_work`
  MODIFY `tid` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `volunteer`
--
ALTER TABLE `volunteer`
  MODIFY `vid` int(4) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
