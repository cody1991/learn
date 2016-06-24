<?php
include "book_sc_fns.php";

session_start();

@$new = $_GET['new'];

if ($new) {
    if (!isset($_SESSION['cart'])) {
        $_SESSION['cart']        = array();
        $_SESSION['items']       = 0;
        $_SESSION['total_price'] = '0.00';
    }

    if (isset($_SESSION['cart'][$new])) {
        $_SESSION['cart'][$new]++;
    } else {
        $_SESSION['cart'][$new] = 1;
    }

    $_SESSION['total_price'] = calculate_price($_SESSION['cart']);

    $_SESSION['items'] = calculate_items($_SESSION['cart']);
}

if (isset($_POST['save'])) {
    foreach ($_SESSION['cart'] as $isbn => $qty) {
        if ($_POST[$isbn] == '0') {
            unset($_SESSION['cart'][$isbn]);
        } else {
            $_SESSION['cart'][$isbn] = $_POST[$isbn];
        }
    }
    $_SESSION['total_price'] = calculate_price($_SESSION['cart']);

    $_SESSION['items'] = calculate_items($_SESSION['cart']);
}

do_html_header("Your shopping cart");

if (($_SESSION['cart']) && (array_count_values($_SESSION['cart']))) {
    display_cart($_SESSION['cart']);
} else {
    echo '<p>There are no items in your cart</p><hr/>';
}

$target = "index.php";

if ($new) {
    $details = get_book_details($new);

    if ($details['catid']) {
        $target = "show_cat.php?catid=" . $details['catid'];
    }
}

display_button($target, 'continue-shopping', 'Continue Shopping');

display_button('checkout.php', 'go-to-checkout', 'Go to Checkout');

do_html_footer();
