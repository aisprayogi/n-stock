CREATE DATABASE inventory_master;
USE inventory_master;

CREATE TABLE products(
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50),
  department_name VARCHAR(50),
  price DECIMAL(10, 2),
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);