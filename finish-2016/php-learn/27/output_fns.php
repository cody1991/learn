
<?php
function do_html_header($title)
{
    ?>
<html>
<head>
    <title><?php echo $title; ?></title>
    <style>
        body{font-family: Arial,Helvetica,sans-serif;font-size:13px;}
        li,td{font-family: Arial,Helvetica,sans-serif;font-size:13px;}
        hr{color:#3333cc;width="300";text-align:left;}
        a{color:#000;}
    </style>
</head>
<body>
<img src="bookmark.gif" border="0" align="left" valign="bottom" height="55" width="57"/>
<h1>PHPbookmark</h1>
<hr/>
<?php
if ($title) {
        do_html_heading($title);
    }
}

function do_html_footer()
{

    ?>
</body>
</html>

<?php
}

function do_html_heading($heading)
{
    ?>
<h2><?php echo $heading; ?></h2>
<?php
}

function do_html_url($url, $name)
{
    ?>
<br/><a href="<?php echo $url; ?>"><?php echo $name; ?></a><br/>
<?php
}

function display_site_info()
{

    ?>

    <ul>
    <li>Store your bookmarks online with us!</li>
    <li>See what other users use!</li>
    <li>Share your favorite links with others!</li>
    </ul>
<?php
}

function display_login_form()
{
    ?>

<p><a href="register_form.php">Not a member</a></p>
<form method="post" action="member.php">
<table bgcolor="#ccc">
<tr>
<td colspan="2">Members log in here:</td>
</tr>
<tr>
<td>Username:</td>
<td><input type="text" name="username"></td>
</tr>
<tr>
<td>Password:</td>
<td><input type="text" name="passwd"></td>
</tr>
<tr>
<td colspan="2" align="center">
<input type="submit" value="Log in">
</td>
</tr>
<tr>
<td colspan="2">
<a href="forgot_form.php">Forgot your password?</a>
</td>
</tr>
</table>
</form>
<?php
}

function display_registration_form()
{
    ?>
 <form method="post" action="register_new.php">
 <table bgcolor="#cccccc">
   <tr>
     <td>Email address:</td>
     <td><input type="text" name="email" size="30" maxlength="100"/></td></tr>
   <tr>
     <td>Preferred username <br />(max 16 chars):</td>
     <td valign="top"><input type="text" name="username"
         size="16" maxlength="16"/></td></tr>
   <tr>
     <td>Password <br />(between 6 and 16 chars):</td>
     <td valign="top"><input type="password" name="passwd"
         size="16" maxlength="16"/></td></tr>
   <tr>
     <td>Confirm password:</td>
     <td><input type="password" name="passwd2" size="16" maxlength="16"/></td></tr>
   <tr>
     <td colspan=2 align="center">
     <input type="submit" value="Register"></td></tr>
 </table></form>
<?php
}

function display_user_urls($url_array)
{
    global $bm_table;
    $bm_table = true;
    ?>
<br/>
<form name="bm_table" action="delete_bms.php" method="post">
<table width="300" cellpadding="2" cellspacing="0">
<?php
$color = "#ccc";
    echo "<tr bgcolor=\"" . $color . "\"><td><strong>Bookmark</strong></td>";

    echo "<td><strong>Delete?</strong></td></tr>";

    if ((is_array($url_array)) && (count($url_array) > 0)) {
        foreach ($url_array as $url) {
            if ($color == '#ccc') {
                $color = '#fff';
            } else {
                $color = '#ccc';
            }

            echo "<tr bgcolor=\"" . $color . "\"><td><a href=\"" . $url . "\">" . htmlspecialchars($url) . "</a></td><td><input type=\"checkbox\" name=\"del_me[]\" value=\"" . $url . "\"/></td></tr>";
        }
    } else {
        echo "<tr><td>No bookmarks on record</td></tr>";
    }
    ?>
    </table>
    </form>
<?php
}
function display_user_menu()
{
    ?>
<a href="member.php">Home</a>&nbsp;|&nbsp;
<a href="add_bm_form.php">Add BM</a> &nbsp;|&nbsp;
<?php
global $bm_table;
    if ($bm_table == true) {
        echo "<a href=\"#\" onClick=\"bm_table.submit();\">Delete BM</a> &nbsp;|&nbsp;";
    } else {
        echo "<span style=\"color:#ccc\">Delete BM</span>&nbsp;|&nbsp;";
    }
    ?>
<a href="change_passwd_form.php">Change password</a>
<br/>
<a href="recommend.php">Recommend URLs to me</a> &nbsp;|&nbsp;
<a href="logout.php">Logout</a>
<hr/>
<?php
}

function display_password_form()
{
    ?>
<br/>
<form action="change_passwd.php" method="post">
<table width="250" cellpadding="2" cellspacing="0" bgcolor="#ccc">
<tr><td>Old password:</td><td><input type="password" name="old_passwd" size="16" maxlength="16"/></td></tr>
<tr><td>New password:</td><td><input type="password" name="new_passwd" size="16" maxlength="16"/></td></tr>
<tr><td>Repeat new password:</td><td><input type="password" name="new_passwd2" size="16" maxlength="16"/></td></tr>
<tr><td colspan="2" align="center"><input type="submit" value="Change password"/></td></tr>
</table>
</form>
<?php
}

function display_forgot_form()
{
    ?>
<br/>
<form action="forgot_passwd.php" method="post">
<table width="250" cellpadding="2" cellspacing="0" bgcolor="#ccc">
<tr><td>Enter your username</td><td><input type="text" name="username" size="16" maxlength="16"></td></tr>
<tr><td colspan="2" align="center">
<input type="submit" value="Change password"/>
</td></tr>
</table>
</form>
<br/>
<?php
}

function display_add_bm_form()
{
    ?>

<form name="bm_table" action="add_bms.php" method="post">
<table width="250" cellspacing="0" cellpadding="2" bgcolor="#ccc">
<tr><td>New BM:</td><td><input type="text" name="new_url" value="http://" size="30" maxlength="255"/></td></tr>
<tr><td colspan="2" align="center"><input type="submit" value="Add bookmark"/></td>
</tr>
</table>
</form>
<?php
}

function display_recommended_urls($url_array)
{
    ?>
<br/>
<table width="300" cellspacing="2" cellpadding="0">
<?php
$color = '#ccc';
    echo "<br bgcolor=\"" . $color . "\">
            <td><strong>Recommendations</strong></td></tr>";

    if ((is_array($url_array)) && (count($url_array) > 0)) {
        foreach ($url_array as $url) {
            if ($color == '#fff') {
                $color = '#fff';
            } else {
                $clor = '#ccc';
            }

            echo "<tr bgcolor=\"" . $color . "\">
                <td><a href=\"" . $url . "\">" . htmlspecialchars($url) . "</a></td></tr>";
        }

    } else {
        echo "<tr><td>No recommendations for you today.</td></tr>";
    }
    ?>
</table>
<?php
}
