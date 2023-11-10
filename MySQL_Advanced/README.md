# MySQL advanced

## Description

RDBMS stands for Relational Database Management System. It is a software system used to manage and organize relational databases. RDBMS stores data in the form of tables, which consist of rows and columns. It provides a structured approach to store and retrieve data, ensuring data integrity, scalability, and security. Examples of RDBMS include MySQL, Oracle, Microsoft SQL Server, and PostgreSQL.

[MySQL](https://devhints.io/mysql) is a widely used relational database management system (RDBMS). MySQL is free and open-source. MySQL is ideal for both small and large applications. Huge websites like Facebook, Twitter, Airbnb, Booking.com, Uber, GitHub, YouTube, etc. use MySQL.

SQL, on the other hand, is a language used to communicate with and manipulate data in an RDBMS. SQL stands for Structured Query Language. SQL is used to define the structure of the database, perform queries, and manage the data stored in the RDBMS.

* How to [create tables](https://dev.mysql.com/doc/refman/5.7/en/create-table.html) with [constraints](https://dev.mysql.com/doc/refman/5.7/en/functions.html).
* How to [optimize queries](https://www.liquidweb.com/kb/mysql-optimization-how-to-leverage-mysql-database-indexing/) by adding indexes
* What is and how to [implement stored procedures](https://www.w3resource.com/mysql/mysql-procedure.php) and [functions](https://dev.mysql.com/doc/refman/5.7/en/create-procedure.html) in MySQL
* What is and how to [implement views](https://www.w3resource.com/mysql/mysql-views.php) in MySQL
* What is and how to implement [triggers](https://www.w3resource.com/mysql/mysql-triggers.php) in MySQL

---

### [0. We are all unique!](0-uniq_users.sql)

* Create a table named "users" with the following attributes: id, email, and name.
* Set the "email" attribute as a unique attribute, meaning each email value must be unique within the table.
* Test the behavior by attempting to insert two different entries with the same email value.

By following these instructions, you will create a table named "users" with the specified attributes and test how it handles inserting duplicate email values for different entries.
```
$ echo "SELECT * FROM users;" | mysql -uroot -p holberton
Enter password: 
ERROR 1049 (42000): Unknown database 'holberton'

$ cat 0-uniq_users.sql | mysql -uroot -p holberton
Enter password: 
ERROR 1049 (42000): Unknown database 'holberton'

$ mysql -u root -p -e "CREATE DATABASE holberton;"
Enter password: 

$ cat 0-uniq_users.sql | mysql -uroot -p holberton
Enter password: 

$ echo 'INSERT INTO users (email, name) VALUES ("bob@dylan.com", "Bob");' | mysql -uroot -p holberton
Enter password:

$ echo 'INSERT INTO users (email, name) VALUES ("sylvie@dylan.com", "Sylvie");' | mysql -uroot -p holberton
Enter password:

$ echo 'INSERT INTO users (email, name) VALUES ("bob@dylan.com", "Jean");' | mysql -uroot -p holberton
Enter password:
ERROR 1062 (23000) at line 1: Duplicate entry 'bob@dylan.com' for key 'users.email'

$ echo "SELECT * FROM users;" | mysql -uroot -p holberton
Enter password:
id      email   name
1       bob@dylan.com   Bob
2       sylvie@dylan.com        Sylvie
```

### [1. In and not out](1-country_users.sql)

* Create a table named users with the attributes: id, email, name and country. For the country attribute set a list of options with a default value, then test what happens when you try to INSERT a country value out of the options and when you don't specify a country value.

* Create a table named "users" with the following attributes:
    - id (unique identifier)
    - email
    - name
country
* For the "country" attribute, set a list of predefined options with a default value.
* Test the behavior of the table by performing the following actions:
    - Try to INSERT a country value that is not in the predefined options.
    - Try to INSERT a record without specifying a value for the country attribute.

By following these instructions, you will create a table named "users" with the specified attributes and test how it handles inserting values outside the options list and not specifying a value for the country attribute.
```
$ echo "SELECT * FROM users;" | mysql -uroot -p holberton
Enter password: 
ERROR 1146 (42S02) at line 1: Table 'holberton.users' doesn't exist

$ mysql -u root -p -e "CREATE DATABASE holberton;"
Enter password: 
ERROR 1007 (HY000) at line 1: Can't create database 'holberton'; database exists

$ cat 1-country_users.sql | mysql -uroot -p holberton
Enter password: 

$ echo 'INSERT INTO users (email, name, country) VALUES ("bob@dylan.com", "Bob", "US");' | mysql -uroot -p holberton
Enter password: 

$ echo 'INSERT INTO users (email, name, country) VALUES ("sylvie@dylan.com", "Sylvie", "CO");' | mysql -uroot -p holberton
Enter password: 

$ echo 'INSERT INTO users (email, name, country) VALUES ("jean@dylan.com", "Jean", "FR");' | mysql -uroot -p holberton
Enter password: 
ERROR 1265 (01000) at line 1: Data truncated for column 'country' at row 1

$ echo 'INSERT INTO users (email, name) VALUES ("john@dylan.com", "John");' | mysql -uroot -p holberton
Enter password: 

$ echo "SELECT * FROM users;" | mysql -uroot -p holberton
Enter password: 
id      email   name    country
1       bob@dylan.com   Bob     US
2       sylvie@dylan.com        Sylvie  CO
3       john@dylan.com  John    US

cau_r@LAPTOP-AJTM3T1G MINGW64 ~/Github/holbertonschool-web_back_end/MySQL_Advanced (main)
$
```

### [2. Best band ever!](2-fans.sql)

* Write a SQL script that ranks country origins of bands, ordered by the number of (non-unique) fans
    - Column names must be: origin and nb_fans
* Create a table using the metal_bands.sql dump provided. A table dump is a script, including its definition and insert statements, that can be executed to recreate the table from scratch.
    - Test your script in holberton.metal_bands table and save the result to a tmp_res file.

```
$ cat metal_bands.sql | mysql -uroot -p holberton
Enter password:

$ mysql -u root -p -e "USE holberton; SHOW TABLES;"
Enter password:
+---------------------+
| Tables_in_holberton |
+---------------------+
| metal_bands         |
| users               |
+---------------------+

$ mysql -u root -p -e "DESCRIBE holberton.metal_bands;"
Enter password: 
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int          | NO   | PRI | NULL    | auto_increment |
| band_name | varchar(255) | YES  |     | NULL    |                |
| fans      | int          | YES  |     | NULL    |                |
| formed    | year         | YES  |     | NULL    |                |
| origin    | varchar(255) | YES  |     | NULL    |                |
| split     | year         | YES  |     | NULL    |                |
| style     | varchar(255) | YES  |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+

$ cat 2-fans.sql | mysql -uroot -p holberton > tmp_res ; head tmp_res
Enter password: 
origin  nb_fans
USA     99349
Sweden  47169
Finland 32878
United Kingdom  32518
Germany 29486
Norway  22405
Canada  8874
The Netherlands 8819
Italy   7178
```

### [3. Old school band](3-glam_rock.sql)

* Write script that lists all bands with Glam rock as their main style, ranked by their longevity
    - Column names must be: band_name and lifespan (in years)
    - You should use attributes formed and split for computing the lifespan

```
$ cat 3-glam_rock.sql | mysql -uroot -p holberton
Enter password: 
band_name       lifespan
Alice Cooper    56
Marilyn Manson  31
Mötley Crüe     34
The 69 Eyes     30
Hardcore Superstar      23
Hanoi Rocks     0
Nasty Idols     0
```

### [4. Buy buy buy](4-store.sql)

* Write a SQL script that creates a trigger that decreases the quantity of an item after adding a new order.

```
$ cat 4-init.sql | mysql -uroot -p holberton 
Enter password: 

$ mysql -u root -p -e "USE holberton; SHOW TABLES;"
Enter password: 
+---------------------+
| Tables_in_holberton |
+---------------------+
| items               |
| metal_bands         |
| orders              |
| users               |
+---------------------+

$ cat 4-store.sql | mysql -uroot -p holberton
Enter password:

$ cat 4-main.sql | mysql -uroot -p holberton
Enter password:
name    quantity
apple   10
pineapple       10
pear    10
--
--
name    quantity
apple   6
pineapple       10
pear    8
item_name       number
apple   1
apple   3
pear    2

```

### [5. Email validation to sent](5-valid_email.sql)

* Write a SQL script that creates a trigger that resets the attribute valid_email only when the email has been changed.

```
$ cat 5-init.sql | mysql -uroot -p holberton
Enter password: 

$ mysql -u root -p -e "DESCRIBE holberton.users;"
Enter password: 
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int          | NO   | PRI | NULL    | auto_increment |
| email       | varchar(255) | NO   |     | NULL    |                |
| name        | varchar(255) | YES  |     | NULL    |                |
| valid_email | tinyint(1)   | NO   |     | 0       |                |
+-------------+--------------+------+-----+---------+----------------+

$ cat 5-valid_email.sql | mysql -uroot -p holberton
Enter password:

$ cat 5-main.sql | mysql -uroot -p holberton
Enter password: 
id      email   name    valid_email
1       bob@dylan.com   Bob     0
2       sylvie@dylan.com        Sylvie  1
3       jeanne@dylan.com        Jeanne  1
--
--
id      email   name    valid_email
1       bob@dylan.com   Bob     1
2       sylvie+new@dylan.com    Sylvie  0
3       jeanne@dylan.com        Jannis  1
--
--
id      email   name    valid_email
1       bob@dylan.com   Bob     1
2       sylvie+new@dylan.com    Sylvie  0
3       jeanne@dylan.com        Jannis  1
```

### [6. Add bonus](4-store.sql)

* Write a SQL script that creates a stored procedure AddBonus that adds a new correction for a student. Procedure AddBonus is taking 3 inputs (in this order):
    - user_id, a users.id value (you can assume user_id is linked to an existing users)
    - project_name, a new or already exists projects - if no projects.name found in the table, you should create it
    - score, the score value for the correction

```
$ ./6-commands 
Enter password: 
Enter password: 
id      name
1       C is fun
2       Python is cool
user_id project_id      score
1       1       80
1       2       96
2       1       91
2       2       73
id      name    average_score
1       Bob     0
2       Jeanne  0
--
--
--
--
id      name
1       C is fun
2       Python is cool
3       Bonus project
4       New bonus
user_id project_id      score
1       1       80
1       2       96
2       1       91
2       2       73
2       2       100
2       3       100
1       3       10
2       4       90
```

### [7. Average score](7-average_score.sql)

* Write a SQL script that creates a stored procedure ComputeAverageScoreForUser that computes and store the average score for a student. Note: An average score can be a decimal
    - Input: user_id, a users.id value (you can assume user_id is linked to an existing users)

```
$ ./7-commands
Enter password: 
Enter password: 
Enter password: 
id      name    average_score
1       Bob     0
2       Jeanne  0
user_id project_id      score
1       1       80
1       2       96
2       1       91
2       2       73
--
--
--
--
id      name    average_score
1       Bob     0
2       Jeanne  82
```

### [8. Optimize simple search](8-index_my_names.sql)

* Write a SQL script that creates an index idx_name_first on the table names and the first letter of name.
    - Test the time to make the search before indexing and after indexing in tables from names.sql dump.
    - Only the first letter of name must be indexed.

```
$ cat names.sql | mysql -uroot -p holberton
Enter password: 

$ mysql -uroot -p holberton
Enter password:

mysql> SELECT COUNT(name) FROM names WHERE name LIKE 'a%';
+-------------+
| COUNT(name) |
+-------------+
|      302936 |
+-------------+
1 row in set (4.82 sec)

mysql> exit
Bye

$ cat 8-index_my_names.sql | mysql -uroot -p holberton
Enter password: 

$ mysql -uroot -p holberton
Enter password:

mysql> SHOW index FROM names;
+-------+------------+----------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+
| Table | Non_unique | Key_name       | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment | Visible | Expression |
+-------+------------+----------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+
| names |          1 | idx_name_first |            1 | name        | A         |          25 |        1 |   NULL | YES  | BTREE      |         |               | YES     | NULL       |
+-------+------------+----------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+
1 row in set (0.01 sec)

mysql> SELECT COUNT(name) FROM names WHERE name LIKE 'a%';
+-------------+
| COUNT(name) |
+-------------+
|      302936 |
+-------------+
1 row in set (1.57 sec)

mysql> exit
Bye
```

### [9. Optimize search and score](9-index_name_score.sql)

* Write a SQL script that creates an index idx_name_first_score on the table names and the first letter of name and the score.
    - Test the time to make the search before indexing and after indexing in tables from names.sql dump.
    - Only the first letter of name AND score must be indexed

```
$ mysql -uroot -p -e "ALTER TABLE holberton.names DROP INDEX idx_name_first;"
Enter password: 

$ mysql -uroot -p -e "SHOW index FROM holberton.names;"
Enter password: 

$ mysql -uroot -p -e "SHOW tables FROM holberton;"
Enter password: 
+---------------------+
| Tables_in_holberton |
+---------------------+
| corrections         |
| items               |
| metal_bands         |
| names               |
| orders              |
| projects            |
| users               |
+---------------------+

$ mysql -uroot -p holberton
Enter password:

mysql> SELECT COUNT(name) FROM names WHERE name LIKE 'a%' AND score < 80;
+-------------+
| COUNT(name) |
+-------------+
|       60717 |
+-------------+
1 row in set (5.58 sec)

mysql> exit
Bye

$ cat 9-index_name_score.sql | mysql -uroot -p holberton
Enter password: 

$ mysql -uroot -p holberton
Enter password:

mysql> SHOW index FROM names;
+-------+------------+----------------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+
| Table | Non_unique | Key_name             | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment | Visible | Expression |
+-------+------------+----------------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+
| names |          1 | idx_name_first_score |            1 | name        | A         |          25 |        1 |   NULL | YES  | BTREE      |         |               | YES     | NULL       |
| names |          1 | idx_name_first_score |            2 | score       | A         |        3901 |     NULL |   NULL | YES  | BTREE      |         |               | YES     | NULL       |
+-------+------------+----------------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+
2 rows in set (0.01 sec)

mysql> SELECT COUNT(name) FROM names WHERE name LIKE 'a%' AND score < 80;
+-------------+
| COUNT(name) |
+-------------+
|       60717 |
+-------------+
1 row in set (4.73 sec)

mysql> exit
Bye
```

### [10. Safe divide](10-div.sql)

* Write a SQL script that creates a function SafeDiv that divides (and returns) the first by the second number or returns 0 if the second number is equal to 0.
    - The function SafeDiv takes 2 arguments:
        + a, INT
        + b, INT
    - And returns a / b or 0 if b == 0

```
$ ./10-commands 
Enter password: 
Enter password: 
Enter password: 
(a / b)
5.0000
0.8000
0.6667
2.0000
NULL
0.7500
Enter password:
SafeDiv(a, b)
5
0.8
0.666667
2
0
0.75
```

### [11. Virtual table for a meeting](11-need_meeting.sql)

* Write a SQL script that creates a view need_meeting that lists all students that have a score under 80 (strict) and no last_meeting or more than 1 month.

```
$ ./11-commands 
Enter password: 
Enter password: 
Enter password: 
name
Jean
Steeve
--
--
name
Bob
Jean
Steeve
--
--
name
Bob
Jean
--
--
name
Bob
--
--
name
Bob
Jean
--
--
View    Create View     character_set_client    collation_connection
need_meeting    CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `need_meeting` AS select `students`.`name` AS `name` from `students` where ((`students`.`score` < 80) and ((`students`.`last_meeting` is null) or (`students`.`last_meeting` < (curdate() + interval -(1) month))))       cp850   cp850_general_ci
--
--
Table   Create Table
students        CREATE TABLE `students` (\n  `name` varchar(255) NOT NULL,\n  `score` int DEFAULT '0',\n  `last_meeting` date DEFAULT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```
