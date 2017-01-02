<?php 

	include 'include.php';
	session_start();

	// echo PASSWORD('cody1991')

	if(isset($_POST['user'])&&isset($_POST['pass'])){

		if(( $connection = mysql_connect(HOST,USER,PASS)  ) === FALSE){
			die("Could not connect the database");
		}

		if(mysql_select_db(DB,$connection)===FALSE){
			die("Could not select database");
		}

		// sprintf 创建字符串的函数
		// mysql_real_escape_string 删除可能有攻击性SQL的，转义
		$sql = sprintf("SELECT 1 FROM users1 WHERE user='%s' AND pass=PASSWORD('%s')",
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
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php if(count($_POST) > 0) echo "INVALID LOGIN"?>
	<form action=" <?php echo $_SERVER["PHP_SELF"]; ?> " method="post">
		<table>
			<tr>
				<td>Username:</td>
				<!-- 这样输出不好，可能是可执行的一些代码 -->
				<td><input autocomplete="off" type="text" name="user" value="<?php if(isset($_POST['user'])) {echo htmlspecialchars($_POST['user']);} ?>"></td>
			</tr>
			<tr>
				<td>Password:</td>
				<td><input autocomplete="off" type="password" name="pass"></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="Submit"></td>
			</tr>
		</table>
	</form>
</body>
</html>