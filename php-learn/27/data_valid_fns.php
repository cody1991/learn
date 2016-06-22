<?php
function filled_out($form_vars)
{
    foreach ($form_vars as $key => $value) {
        if (!isset($key) || ($value == '')) {
            return false;
        }
    }
    return true;
}

function valid_email($address)
{
    if (preg_match('/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/', $address)) {
        return true;
    } else {
        return false;
    }
}
