-- create the burger table --
CREATE TABLE burgers
(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name varchar (255) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (name) VALUES ('protein-style');
INSERT INTO burgers (name) VALUES ('animal-style');
INSERT INTO burgers (name, devour) VALUES ('double meat', true);
INSERT INTO burgers (name, devour) VALUES ('three-by-three', true);
INSERT INTO burgers (name, devour) VALUES ('four-by-four', true);
INSERT INTO burgers (name) VALUES ('double-double');