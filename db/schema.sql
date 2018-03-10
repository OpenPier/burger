-- Create the burger_db--
CREATE DATABASE burger_db;
USE burger_db;
-- create the burger table --
CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);