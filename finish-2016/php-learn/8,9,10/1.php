<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
// Customers(CustomerID,Name,Address,City);
// 下横线是主键
// Orders(OrderID,CustomerID,Amount,Date)；
// 斜体CustomerID是外键

// Books(ISBN,Author,Title,Price);

// Order_ITEM(OrderID,ISBN,Quantity);

// Book_Reviews(ISBN,Reviews);

// create database dbname;
// use dbname;

// source *.sql

// UNSIGNED 0或者一个整数
// float(6,2) 宽六位 最多两个小数点

// show tables;
// describe books

// select name,city from customers;
// select * from customers;
// select * from orders where customerid = 3;
// = > < >= <= != <>
// IS NOT NULL
// IS NULL
// BETWEEN
// IN
// NOT IN
// LIKE
// NOT LIKE
// REGEXP
// -----------
// 关联
// select orders.orderid,orders.amount,orders.date
// from customers,orders
// where customers.name = 'Julie Smith'
// and customers.customerid = orders.customerid;
// -------------
// select customers.name
// from customers,orders,order_items,books
// where customers.customerid = orders.customerid
// and orders.orderid = order_items.orderid
// and order_items.isbn = books.isbn
// and books.title like "%cody%";
// ------------
// 左关联
// 两个表之间指定的关联条件下匹配的数据行。
// 如果右边的表中没有匹配行，结果中会增加一行，该行右边的值为NULL
// select customers.customerid,customers.name,orders.orderid
// from customers left join orders
// on customers.customerid = orders.customerid;
// 左关联将customers和orders表关联起来
// 查找为空的
// select customers.customerid,customers.name
// from customers left join orders
// using (customerid)
// where orders.orderid is null;
// 左关联支持 on 也支持 using
// ---------------
// 别名
// select c1.name,c2.name,c1.city
// from customers as c1,customers as c2
// where c1.city = c2.city
// and c1.name != c2.name;
// -----------------
// 排序
// select name,address
// from customers
// order by name asc;
// order by name desc;
// ------------
// AVG 平均
// select avg(amount) from orders;
// COUNT
// select customerid,avg(mount) from orders group by customerid;
// MIN
// MAX
// STD
// STDDEV
// SUM
// ----------------------
// select customerid,avg(amount) from orders group by customerid having avg(amount) > 50;
// select customerid,amount from orders where amount = (select max(amount) from orders);
// ---
// 更新
// update books
// set price = price*1.1;
?>
</body>
</html>
