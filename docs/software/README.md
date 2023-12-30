# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних

```sql
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
```

## RESTfull сервіс для управління даними

### Головний файл для запуску сервера | server.js
```js 
'use strict';

require('dotenv').config();

const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const db = require('./db');
const app = express();

app.use(express.json());
app.use('/files', fileRoutes);
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
console.log(`Server running on port ${PORT}`),
);

const closeServer = async () => {
console.log('\nStarting the process of closing the app...');
try {
await db.pool.end();
await server.close(() => {
process.exit();
});
} catch (err) {
console.error('Error during closing the app: ' + err.message);
process.exit(1);
}
};

process.on('SIGINT', closeServer);
process.on('SIGTERM', closeServer);
```

### Файл для з'єднання з базою даних | db.js
```js
'use strict';

require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

module.exports = pool; 
```

### Файл моделі | File.js
```js
'use strict';

const db = require('../db');
const { getDatetime } = require('../utils/dateUtils');

class File {
  static async addNew(requestBody) {
    const { name, description, format, hasVisualization, authorId } =
      requestBody;
    const uploadDate = getDatetime();
    const lastEditTime = uploadDate;
    const sql = `
    INSERT INTO file(
    name, 
    description, 
    uploadDate, 
    lastEditTime,
    format,
    hasVisualization,
    authorId
    )
    VALUES(?, ?, ?, ?, ?, ?, ?);
    `;
    const [file] = await db.execute(sql, [
      name,
      description,
      uploadDate,
      lastEditTime,
      format,
      hasVisualization,
      authorId,
    ]);
    return this.getFileById(file.insertId);
  }

  static async getAll() {
    const sql = 'SELECT * FROM file;';
    const [files] = await db.execute(sql);
    return files;
  }

  static async getFileById(id) {
    const sql = `
        SELECT * FROM file
        WHERE id = ?;
    `;
    const [file] = await db.execute(sql, [id]);
    return file;
  }

  static async deleteFileById(id) {
    const file = this.getFileById(id);
    const sql = `
        DELETE FROM file
        WHERE id = ?;
    `;
    await db.execute(sql, [id]);
    return file;
  }

  static async updateFileInfo(requestBody, id) {
    const { newName, description } = requestBody;
    const lastEditTime = getDatetime();
    const sql = `
    UPDATE file
    SET name = ?, description = ?, lastEditTime = ?
    WHERE id = ?;
    `;
    await db.execute(sql, [newName, description, lastEditTime, id]);
    return this.getFileById(id);
  }
}

module.exports = File;
```

### Файл контроллера | fileControllers.js
```js
'use strict';

const File = require('../models/File');

const addNewFile = async (req, res) => {
  try {
    const file = await File.addNew(req.body);
    res.status(200).json({ file });
  } catch (error) {
    res.status(404).json({ errorMessage: error.message });
  }
};

const getAllFiles = async (req, res) => {
  try {
    const files = await File.getAll();
    res.status(200).json({ files });
  } catch (error) {
    res.status(404).json({ errorMessage: error.message });
  }
};

const getFileById = async (req, res) => {
  try {
    const fileID = req.params.id;
    const file = await File.getFileById(fileID);
    res.status(200).json({ file });
  } catch (error) {
    res.status(404).json({ errorMessage: error.message });
  }
};

const updateFileInfo = async (req, res) => {
  try {
    const fileID = req.params.id;
    const file = await File.updateFileInfo(req.body, fileID);
    res.status(200).json({ file });
  } catch (error) {
    res.status(404).json({ errorMessage: error.message });
  }
};

const deleteFileById = async (req, res) => {
  try {
    const fileID = req.params.id;
    const file = await File.deleteFileById(fileID);
    res.status(200).json({ 'Deleted file': file });
  } catch (error) {
    res.status(404).json({ errorMessage: error.message });
  }
};

module.exports = {
  addNewFile,
  getAllFiles,
  getFileById,
  updateFileInfo,
  deleteFileById,
};
```

### Файл маршрутизатора | fileRoutes.js
```js
'use strict';

const express = require('express');
const fileControllers = require('../controllers/fileControllers');
const router = new express.Router();

router
  .route('/')
  .get(fileControllers.getAllFiles)
  .post(fileControllers.addNewFile);
router
  .route('/:id')
  .get(fileControllers.getFileById)
  .patch(fileControllers.updateFileInfo)
  .delete(fileControllers.deleteFileById);

module.exports = router;
```

### Файл dateUtils.js
```js
'use strict';

const getDatetime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dayInMonth = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${year}-${month}-${dayInMonth} ${hours}:${minutes}:${seconds}`;
};

module.exports = { getDatetime };
```