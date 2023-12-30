-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema statistics-control
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `statistics-control` ;

-- -----------------------------------------------------
-- Schema statistics-control
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `statistics-control` ;
USE `statistics-control` ;

-- -----------------------------------------------------
-- Table `statistics-control`.`file`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `statistics-control`.`file` ;

CREATE TABLE IF NOT EXISTS `statistics-control`.`file` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NULL,
  `uploadDate` DATETIME NOT NULL,
  `lastEditTime` DATETIME NOT NULL,
  `format` VARCHAR(45) NOT NULL,
  `hasVisualization` TINYINT(1) NOT NULL,
  `authorId` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `statistics-control`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `statistics-control`.`role` ;

CREATE TABLE IF NOT EXISTS `statistics-control`.`role` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  FULLTEXT INDEX `idx_title_description` (`name`, `description`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `statistics-control`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `statistics-control`.`user` ;

CREATE TABLE IF NOT EXISTS `statistics-control`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nickname` VARCHAR(45) NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_role1_idx` (`role_id` ASC),
  CONSTRAINT `fk_user_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `statistics-control`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `statistics-control`.`request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `statistics-control`.`request` ;

CREATE TABLE IF NOT EXISTS `statistics-control`.`request` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `target` VARCHAR(255) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_request_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_request_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `statistics-control`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `statistics-control`.`right`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `statistics-control`.`right` ;

CREATE TABLE IF NOT EXISTS `statistics-control`.`right` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `statistics-control`.`filter`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `statistics-control`.`filter` ;

CREATE TABLE IF NOT EXISTS `statistics-control`.`filter` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `keyword` VARCHAR(255) NULL,
  `country` VARCHAR(45) NULL,
  `format` VARCHAR(45) NULL,
  `request_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_filter_request1_idx` (`request_id` ASC),
  CONSTRAINT `fk_filter_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `statistics-control`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `statistics-control`.`search`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `statistics-control`.`search` ;

CREATE TABLE IF NOT EXISTS `statistics-control`.`search` (
  `request_id` INT UNSIGNED NOT NULL,
  `file_id` INT NOT NULL,
  PRIMARY KEY (`request_id`, `file_id`),
  INDEX `fk_search_file1_idx` (`file_id` ASC),
  CONSTRAINT `fk_search_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `statistics-control`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_search_file1`
    FOREIGN KEY (`file_id`)
    REFERENCES `statistics-control`.`file` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `statistics-control`.`permission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `statistics-control`.`permission` ;

CREATE TABLE IF NOT EXISTS `statistics-control`.`permission` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `right_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_permission_right1_idx` (`right_id` ASC),
  CONSTRAINT `fk_permission_right1`
    FOREIGN KEY (`right_id`)
    REFERENCES `statistics-control`.`right` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `statistics-control`.`grant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `statistics-control`.`grant` ;

CREATE TABLE IF NOT EXISTS `statistics-control`.`grant` (
  `right_id` INT UNSIGNED NOT NULL,
  `role_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`right_id`, `role_id`),
  INDEX `fk_grant_role1_idx` (`role_id` ASC),
  CONSTRAINT `fk_grant_right1`
    FOREIGN KEY (`right_id`)
    REFERENCES `statistics-control`.`right` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_grant_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `statistics-control`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `statistics-control`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `statistics-control`.`access` ;

CREATE TABLE IF NOT EXISTS `statistics-control`.`access` (
  `role_id` INT UNSIGNED NOT NULL,
  `file_id` INT NOT NULL,
  PRIMARY KEY (`role_id`, `file_id`),
  INDEX `fk_access_file1_idx` (`file_id` ASC),
  CONSTRAINT `fk_access_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `statistics-control`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_file1`
    FOREIGN KEY (`file_id`)
    REFERENCES `statistics-control`.`file` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
