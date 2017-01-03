	SELECT events.date FROM drivers,times,events WHERE events.id = times.event_id AND times.drivers_id=drivers.id AND drivers.id = 4 ORDER BY events.date ASC LIMIT 0,1

	最新的

---

	SELECT COUNT(*) FROM drivers,times WHERE times.drivers_id=drivers.id AND drivers.id=4

---

	INSERT INTO `cars` (`id`, `make`, `model`, `year`, `class`) VALUES (NULL, 'Volk', 'Bee', '2013', '2'), (NULL, 'Por', '911 GT RS', '1999', '4');
	
	交叉连接

	SELECT * FROM cars,times,drivers,events WHERE cars.id=times.car_id AND drivers.id = times.drivers_id AND events.id = times.event_id

	SELECT * FROM drivers LEFT OUTER JOIN times on times.drivers_id=drivers.id
	
	SELECT * FROM times CROSS JOIN drivers
	
---

	LOCK TABLES account WRITE;
	SELECT balance FROM account WHERE number = 2;
	UPDATE account
		SET balance = 1500 WHRER number = 2;
	UNLOCK TABLES;

---
	不能存在竞态

	START TRANSACTION;
	UPDATE account
		SET balance = balance - 1000 WHERE number = 2;
	UPDATE account
		SET balance = balance + 100 WHERE number = 1;
	COMMIT;

	START TRANSACTION;
	UPDATE account
		SET balance = balance - 1000 WHERE number = 2;
	UPDATE account
		SET balance = balance + 100 WHERE number = 1;
	SELECT balance
		FROM account WHERE number = 2;
	# suppos account #2 has a negative balance!	

---
	DUPLICATE 如果已经存在了这个 KEY

	INSERT INTO table (a,b,c) VALUES (1,2,3)
		ON DUPLICATE KEY UPDATE c=c+1;

	UPDATE table SET c=c+1 WHERE a=1;

---

	内连接

	SELECT drivers.name,times.* FROM times
	JOIN drivers
	ON times.drivers_id=drivers.id

	SELECT drivers.name,times.* FROM times,drivers
	WHERE times.drivers_id=drivers.id

---

	ALTER TABLE `times` CHANGE `am_run1` `am_run1` DECIMAL(6,3) NOT NULL;

	INSERT INTO `cars` (`id`, `make`, `model`, `year`, `class`) VALUES (NULL, 'Ford', 'Pinto', '2014', '5');

	CREATE TABLE `phplearn`.`cars` ( 
		`id` MEDIUMINT NOT NULL AUTO_INCREMENT ,  
		`make` VARCHAR(20) NOT NULL ,  
		`model` VARCHAR(20) NOT NULL ,  
		`year` YEAR(4) NOT NULL ,  
		`class` TINYINT(4) NOT NULL ,    
		PRIMARY KEY  (`id`)
	) ENGINE = InnoDB;

	CREATE TABLE `phplearn`.`drivers` ( 
		`id` INT NOT NULL AUTO_INCREMENT ,  
		`name` VARCHAR(255) NOT NULL ,  
		`age` SMALLINT(6) NOT NULL ,  
		`year_started` YEAR(4) NOT NULL ,    
		PRIMARY KEY  (`id`)
	) ENGINE = InnoDB;

---

	INSERT INTO users2 VALUES("cody1991",AES_ENCRYPT("cody1991","cody1991"))

---

	UPDATE `users2` 
		SET `user` = 'cody199' 
	WHERE `users2`.`user` = 'cody1991';

---

	AES_ENCRYPT(key,key_str)

	NOW()

	DATA_FORMAT(date,format)

	TIME_FORMAT(time,format)

---

	SELECT

	INSERT

	UPDATE

	DELETE

	CREATE

	ALTER

	DROP

---

	CREATE DATABASE `phplearn`;

	CREATE TABLE `phplearn`.`users` ( 
		`user` INT(255) NOT NULL , 
		`pass` INT(255) NOT NULL 
	) ENGINE = InnoDB;

	ALTER TABLE `users` ADD PRIMARY KEY(`user`);

	ALTER TABLE `users` 
		CHANGE `user` 
		`user` VARCHAR(255) NOT NULL, 
		CHANGE `pass` 
		`pass` VARCHAR(255) NOT NULL;

	INSERT INTO `users` (
		`user`, 
		`pass`
	) VALUES (
		'cody1991', 'cody1991'
	);

	SELECT `user` FROM `users` WHERE 1

	SELECT * FROM `users` WHERE 1

	DELETE FROM `users` WHERE 
		`users`.`user` = 'cody1992'

	ALTER TABLE `users` ADD INDEX( `user`, `pass`);

---


	<?php 
		session_start();

		if(isset($_POST['user'])&&isset($_POST['pass'])){

			if(( $connection = mysql_connect("localhost","cody1991","cody1991")  ) === FALSE){
				die("Could not connect the database");
			}

			if(mysql_select_db('phplearn',$connection)===FALSE){
				die("Could not select database");
			}

			// sprintf 创建字符串的函数
			// mysql_real_escape_string 删除可能有攻击性SQL的，转义
			$sql = sprintf("SELECT 1 FROM users WHERE user='%s' AND pass='%s'",
												mysql_real_escape_string($_POST['user']),
												mysql_real_escape_string($_POST['pass']));

			$result = mysql_query($sql);

			// FALSE 是有错误，0不是
			if($result === FALSE){
				die("Could not query database");
			}

			if(mysql_num_rows($result)==1){
					$_SESSION['authenticated'] = TRUE;
					$host = $_SERVER['HTTP_HOST'];
					$path = rtrim(dirname($_SERVER['PHP_SELF']),'/\\');
					header("Location:http://$host$path/index.php");
					exit;
			}
		}
	?>

---

	mysql_connect

	mysql_select_db

	sprintf

	mysql_real_escape_string

	mysql_query

	mysql_num_rows