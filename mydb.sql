
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`tb_TipoPersonaLegal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_TipoPersonaLegal` (
  `id_TipoPersona` VARCHAR(4) NOT NULL,
  `TipoPersonaLegal` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_TipoPersona`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_Ciudades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_Ciudades` (
  `id_Ciudad` VARCHAR(6) NOT NULL,
  `Ciudad` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_Ciudad`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_Pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_Pais` (
  `id_Pais` VARCHAR(3) NOT NULL,
  `Pais` VARCHAR(56) NOT NULL,
  PRIMARY KEY (`id_Pais`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_Direcccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_Direcccion` (
  `id_Direcccion` VARCHAR(6) NOT NULL,
  `Direccion` VARCHAR(45) NOT NULL,
  `id_Ciudad` VARCHAR(6) NOT NULL,
  `id_Pais` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`id_Direcccion`),
  INDEX `Ciudades_idx` (`id_Ciudad` ASC) VISIBLE,
  INDEX `Pais_fk_idx` (`id_Pais` ASC) VISIBLE,
  CONSTRAINT `Ciudad_fk`
    FOREIGN KEY (`id_Ciudad`)
    REFERENCES `mydb`.`tb_Ciudades` (`id_Ciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Pais_fk`
    FOREIGN KEY (`id_Pais`)
    REFERENCES `mydb`.`tb_Pais` (`id_Pais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_Personas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_Personas` (
  `Celular` VARCHAR(15) NOT NULL,
  `Correo` VARCHAR(76) NOT NULL,
  `Direccion` VARCHAR(6) NOT NULL,
  `TipoPersonaLegal` VARCHAR(4) NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Apellido` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Celular`),
  INDEX `TipoPersonaLegal_id` (`TipoPersonaLegal` ASC) VISIBLE,
  INDEX `Direccion_id` (`Direccion` ASC) VISIBLE,
  CONSTRAINT `TipoPersonaLegal`
    FOREIGN KEY (`TipoPersonaLegal`)
    REFERENCES `mydb`.`tb_TipoPersonaLegal` (`id_TipoPersona`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Direccion`
    FOREIGN KEY (`Direccion`)
    REFERENCES `mydb`.`tb_Direcccion` (`id_Direcccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

