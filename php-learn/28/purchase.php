<?php

include 'book_sc_fns.php';

session_start();

do_html_header("Checkout");

$name    = isset($_POST['name']) ? $_POST['name'] : '';
$address = isset($_POST['address']) ? $_POST['address'] : '';
$city    = isset($_POST['city']) ? $_POST['city'] : '';
$zip     = isset($_POST['zip']) ? $_POST['zip'] : '';
$country = isset($_POST['country']) ? $_POST['country'] : '';

if (($_SESSION['cart']) && ($name) && ($address) && ($city) && ($zip) && ($country)) {
    if (insert_order($_POST) != false) {
        // 成功

    }
}
