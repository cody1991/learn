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