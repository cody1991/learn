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
        display_cart($_SESSION['cart'], false, 0);

        display_card_form($name);

        display_button("show_cart.php", "continue-shopping", "Continue Shopping");
    } else {
        echo "<p>You did not fill in all the fields, please try again.</p><hr />";
        display_button('checkout.php', 'back', 'Back');
    }
}

do_html_footer();
