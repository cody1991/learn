<?php
require_once 'bookmark_fns.php';

session_start();

@$old_user = $_SESSION['valid_user'];

unset($_SESSION['valid_user']);

$result_dest = session_destroy();

do_html_header('Logging out');

if (!empty($old_user)) {
    if ($result_dest) {
        // if they were logged in and are now logged out
        echo 'Logged out.<br/>';
        do_html_url('login.php', 'Login');
    } else {
        echo 'Could not log you out.<br/>';
    }
} else {
    echo 'You were not logged in , and so have not been logged out.<br/>';
    do_html_url('login.php', 'Login');
}

do_html_footer();
