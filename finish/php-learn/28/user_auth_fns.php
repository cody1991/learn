<?php

function check_admin_user()
{
    if (isset($_SESSION['admin_user'])) {
        return true;
    } else {
        return false;
    }
}

function login($username, $password)
{
    $conn = db_connect();

    if (!$conn) {
        return 0;
    }

    $result = $conn->query("select * from admin where username='" . $username . "' and password = sha1('" . $password . "')");

    if (!$result) {
        return 0;
    }

    if ($result->num_rows > 0) {
        return 1;
    } else {
        return 0;
    }
}
