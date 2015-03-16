/*
 Navicat Premium Data Transfer

 Source Server         : bonnie
 Source Server Type    : MySQL
 Source Server Version : 50536
 Source Host           : localhost
 Source Database       : cmpe226

 Target Server Type    : MySQL
 Target Server Version : 50536
 File Encoding         : utf-8

 Date: 03/15/2015 21:45:16 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_name` varchar(20) NOT NULL,
  `password` varchar(512) NOT NULL,
  `user_type` varchar(10) NOT NULL,
  `security_question` varchar(100) NOT NULL,
  `securty_answer` varchar(100) NOT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `users`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('bonbon', 'password', 'user', 'What is your favorite sport?', 'Cricket'), ('bonn', 'password', 'user', 'what is your favorite color?', 'red'), ('boogie', 'coldy', 'user', 'what is your favorite color?', 'orange'), ('ram', 'password', 'admin', 'security_question?', 'securty_answer'), ('ram5', 'password', 'admin', 'security_question?', 'securty_answer');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
