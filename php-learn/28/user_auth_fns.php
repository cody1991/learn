<?php

function check_admin_user()
{
    if (isset($_SESSION['admin_user'])) {
        return true;
    } else {
        return false;
    }
}
