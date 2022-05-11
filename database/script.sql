CREATE DATABASE ts_node_db;

USE ts_node_db;

CREATE TABLE tbl_users (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(60) UNIQUE NOT NULL,
    status TINYINT NOT NULL DEFAULT 1,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP
);

INSERT INTO tbl_users (id,name,email,status) VALUES (NULL,'PETER PAN','peter@test.com',1);
INSERT INTO tbl_users (id,name,email,status) VALUES (NULL,'MARY CHERRY','mary@test.com',1);
INSERT INTO tbl_users (id,name,email,status) VALUES (NULL,'WEST HOUSE','west@test.com',1);
INSERT INTO tbl_users (id,name,email,status) VALUES (NULL,'BARAK OBAMA','obama@test.com',1);
COMMIT;
