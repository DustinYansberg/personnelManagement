-- creating database

-- creating office
CREATE TABLE `personnel_management`.`office` (
  `office_id` INT NOT NULL AUTO_INCREMENT,
  `office_name` VARCHAR(45) NOT NULL,
  `office_city` VARCHAR(45) NULL,
  `office_address_number` INT NULL,
  `office_street_name` VARCHAR(45) NULL,
  `office_state` VARCHAR(2) NULL,
  `office_phone` VARCHAR(12) NULL,
  PRIMARY KEY (`office_id`),
  UNIQUE INDEX `office_name_UNIQUE` (`office_name` ASC) VISIBLE);
  
-- creating employee table
CREATE TABLE `personnel_management`.`employee` (
  `employee_id` INT NOT NULL AUTO_INCREMENT,
  `employee_first_name` VARCHAR(45) NOT NULL,
  `employee_last_name` VARCHAR(45) NOT NULL,
  `office_id` INT NULL,
  `employee_name` VARCHAR(45) GENERATED ALWAYS AS (concat(`employee_first_name`,_utf8mb4' ',`employee_last_name`)) VIRTUAL,
  PRIMARY KEY (`employee_id`),
  INDEX `employee_office_id_idx` (`office_id` ASC) VISIBLE,
  CONSTRAINT `employee_office_id`
    FOREIGN KEY (`office_id`)
    REFERENCES `personnel_management`.`office` (`office_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE);