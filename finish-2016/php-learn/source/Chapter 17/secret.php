<?php
  //create short names for variables
  $name = $_POST['name'];
  $password = $_POST['password'];

  if ((!isset($name)) || (!isset($password))) {
    //Visitor needs to enter a name and password
?>
    <h1>Please Log In</h1>
    <p>This page is secret.</p>
    <form method="post" action="secret.php">
    <p>Username: <input type="text" name="name"></p>
    <p>Password: <input type="password" name="password"></p>
    <p><input type="submit" name="submit" value="Log In"></p>
    </form>
<?php
  } else if(($name=="user") && ($password=="pass")) {
    // visitor's name and password combination are correct
    echo "<h1>Here it is!</h1>
          <p>I bet you are glad you can see this secret page.</p>";
  } else {
    // visitor's name and password combination are not correct
    echo "<h1>Go Away!</h1>
          <p>You are not authorized to use this resource.</p>";
  }
?>
