DROP DATABASE burgers_DB;
CREATE DATABASE burgers_DB;
USE burgers_DB;
CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (100) NOT NULL,
devoured boolean NOT NULL,
PRIMARY KEY(id)
);