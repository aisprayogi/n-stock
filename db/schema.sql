CREATE DATABASE nstock;
USE nstock;

CREATE TABLE products(
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50),
  department_name VARCHAR(50),
  price DECIMAL(10, 2),
  quantity_on_hand INTEGER(4),
  PRIMARY KEY (item_id)
);