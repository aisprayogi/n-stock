CREATE DATABASE nstock;
USE nstock;

CREATE TABLE products(
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50),
  department_name VARCHAR(50),
  price DECIMAL(10, 2),
  quantity_on_hand INTEGER(10),
  quantity_sold_nov_2015 INTEGER(10),
  quantity_sold_dec_2015 INTEGER(10),
  quantity_sold_jan_2016 INTEGER(10),
  quantity_sold_feb_2016 INTEGER(10),
  quantity_sold_mar_2016 INTEGER(10),
  quantity_sold_apr_2016 INTEGER(10),
  quantity_sold_may_2016 INTEGER(10),
  quantity_sold_jun_2016 INTEGER(10),
  quantity_sold_jul_2016 INTEGER(10),
  quantity_sold_aug_2016 INTEGER(10),
  quantity_sold_sep_2016 INTEGER(10),
  quantity_sold_oct_2016 INTEGER(10),
  quantity_sold_nov_2016 INTEGER(10),
  quantity_sold_dec_2016 INTEGER(10),
  quantity_sold_jan_2017 INTEGER(10),
  quantity_sold_feb_2017 INTEGER(10),
  quantity_sold_mar_2017 INTEGER(10),
  quantity_sold_apr_2017 INTEGER(10),
  quantity_sold_may_2017 INTEGER(10),
  quantity_sold_jun_2017 INTEGER(10),
  quantity_sold_jul_2017 INTEGER(10),
  quantity_sold_aug_2017 INTEGER(10),
  quantity_sold_sep_2017 INTEGER(10),
  quantity_sold_oct_2017 INTEGER(10)
  PRIMARY KEY (item_id)
);