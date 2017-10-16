DROP DATABASE IF EXISTS bamazondb;
CREATE DATABASE bamazondb;
USE bamazondb;

CREATE TABLE products(
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50),
  department_name VARCHAR(50),
  price DECIMAL(10, 2),
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES  ("Plates", "Kitchen", 2.50, 2),
            ("Cups", "Kitchen", 1.50, 2),
            ("TV", "Electronics", 50.50, 2),
            ("Headphones", "Electronics", 12.50, 2),
            ("Dog Food", "Pets", 10.50, 2),
            ("Cat Food", "Pets", 10.50, 2),
            ("Shirts", "Clothing", 5.50, 2),
            ("Shoes", "Clothing", 15.50, 2),
            ("Couch", "Furniture", 222.50, 2),
            ("Chair", "Furniture", 112.50, 2);