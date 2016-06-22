<?php
require_once 'bookmark_fns.php';

session_start();

do_html_header('Changing password');

$old_passwd  = $_POST['old_passwd'];
$new_passwd  = $_POST['new_passwd'];
$new_passwd2 = $_POST['new_passwd2'];

try {
    check_valid_user();
    if (!filled_out($_POST)) {
        throw new Exception("You have not filled out the form completely.Please try again", 1);
    }
    if ($new_passwd != $new_passwd2) {
        throw new Exception("Passwords entered were not the same. No changed", 1);
    }
    if ((strlen($new_passwd) > 16) || (strlen($new_passwd) < 6)) {
        throw new Exception("New password must be between 6 and 16 characters.Try again", 1);
    }

    change_password($_SESSION['valid_user'], $old_passwd, $new_passwd);
    echo 'Password changed.';
} catch (Exception $e) {
    echo $e->getMessage();
}
echo '<br/>';
display_user_menu();
do_html_footer();
