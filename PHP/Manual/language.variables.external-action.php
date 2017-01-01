<?php 
	echo $_POST['username'];
	echo $_REQUEST['username'];

	// import_request_variables('p','p_');
	// echo $p_username;

	if(isset($_POST['action'])&&$_POST['action']=='submitted'){
		echo '<pre>';
		print_r($_POST);
		echo '<a href="'.$_SERVER['PHP_SELF'].'">Please try again</a>';
		echo '</pre>';
	}else{


?>
	
	<form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
		Name: <input type="text" name="personal[name]"><br/>
		Email: <input type="text" name="personal[email]"><br/>
		Beer:<br/>
		<!-- 数组 -->
		<select name="beer[]">
			<option value="warthog">warthog</option>
			<option value="guinness">guinness</option>
		</select>
		<input type="hidden" name="action" value="submitted">
		<input type="submit" name="submit" value="Submit">
	</form>

<!-- 	Array
(
    [personal] => Array
        (
            [name] => tang
            [email] => 476490767@qq.com
        )

    [beer] => Array
        (
            [0] => guinness
        )

    [action] => submitted
    [submit] => Submit
) -->

<?php } ?>
