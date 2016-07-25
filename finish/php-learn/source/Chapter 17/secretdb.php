<?php
  $name = $_POST['name'];
  $password = $_POST['password'];

  if ((!isset($name)) || (!isset($password))) {
  //Visitor needs to enter a name and password
?>
    <h1>Please Log In</h1>
    <p>This page is secret.</p>
    <form method="post" action="secretdb.php">
    <p>Username: <input type="text" name="name"></p>
    <p>Password: <input type="password" name="password"></p>
    <p><input type="submit" name="submit" value="Log In"></p>
    </form>

<?php
  } else {
    // connect to mysql
    $mysql = mysqli_connect("localhost", "webauth", "webauth");
    if(!$mysql) {
      echo "Cannot connect to database.";
      exit;
    }
    // select the appropriate database
    $selected = mysqli_select_db($mysql, "auth");
    if(!$selected) {
      echo "Cannot select database.";
      exit;
    }

    // query the database to see if there is a record which matches
    $query = "select count(*) from authorised_users where
              name = '".$name."' and
              password = sha1('".$password."')";

    $result = mysqli_query($mysql, $query);
    if(!$result) {
      echo "Cannot run query.";
      exit;
    }
    $row = mysqli_fetch_row($result);
    $count = $row[0];

    if ($count > 0) {
      // visitor's name and password combination are correct
      echo "<h1>Here it is!</h1>
            <p>I bet you are glad you can see this secret page.</p>";
    } else {
      // visitor's name and password combination are not correct
      echo "<h1>Go Away!</h1>
            <p>You are not authorized to use this resource.</p>";
    }
  }
?>