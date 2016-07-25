<html>
<body>
<h1>Send Me Private Mail</h1>

<?php
// you might need to change this line, if you do not use
// the default ports, 80 for normal traffic and 443 for SSL
if($_SERVER['SERVER_PORT']!=443) {
  echo '<p style="color: red">WARNING: you have not
         connected to this page using SSL. Your message could
         be read by others.</p>';
}
?>

<form method="post" action="send_private_mail.php">

<p>Your email address:<br/>
<input type="text" name="from" size="40"></p>

<p>Subject:<br/>
<input type="text" name="title" size="40"></p>

<p>Your message:<br/>
<textarea name="body" cols="30" rows="10"></textarea></p>

<br/>
<input type="submit" name="submit" value="Send!">

</form>

</body>
</html>
