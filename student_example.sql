CREATE SCHEMA IF NOT EXISTS `icetex`;
USE `icetex` ;

CREATE TABLE IF NOT EXISTS `student` (
  `cedula` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cedula`));

CREATE TABLE IF NOT EXISTS `debt` (
  `iddebt` INT NOT NULL,
  `total_debt` INT NOT NULL,
  `date` DATE NOT NULL,
  `student_cedula` INT NOT NULL,
  PRIMARY KEY (`iddebt`),
  INDEX `fk_debt_student_idx` (`student_cedula` ASC) ,
  CONSTRAINT `fk_debt_student`
    FOREIGN KEY (`student_cedula`)
    REFERENCES `icetex`.`student` (`cedula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
