<?php

function do_html_header($title = '')
{
    if (!$_SESSION["items"]) {
        $_SESSION["items"] = '0';
    }
    if (!$_SESSION["total_price"]) {
        $_SESSION["total_price"] = '0.00';
    }
    ?>

<html>
<head>
<title><?php echo $title; ?></title>
<style>
h2{
h2 { font-family: Arial, Helvetica, sans-serif; font-size: 22px; color: red; margin: 6px }
body { font-family: Arial, Helvetica, sans-serif; font-size: 13px }
li, td { font-family: Arial, Helvetica, sans-serif; font-size: 13px }
hr { color: #FF0000; width=70%; text-align=center}
a { color: #000000 }
}
</style>
</head>
<body>
<table width="100%" border="0" cellspacing="0" bgcolor="#ccc">
<tr>
<td rowspan=2><a href="index.php"><img src="images/Book-O-Rama.gif" border="0" align="left" valign="bottom" height="55" width="325"></a></td>
<td align="right" valign="bottom">
<?php
if (isset($_SESSION['admin_user'])) {
        echo "&nbsp;";
    } else {
        echo "Total Items = " . $_SESSION['items'];
    }
    ?>
</td>
<td align="right" rowspan="2" width="135">
<?php
if (isset($_SESSION['admin_user'])) {
        display_button('logout.php', 'log-out', 'Log Out');
    } else {
        display_button('show_cart.php', 'view-cart', 'View Your Shopping Cart');
    }
    ?>
</td>
</tr>
<tr>
<td align="right" valign="top">
<?php
if (isset($_SESSION['admin_user'])) {
        echo "&nbsp;";
    } else {
        echo "Total Price = $" . number_format($_SESSION['total_price'], 2);
    }
    ?>
</td>
</tr>
</table>
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

function display_button($target, $image, $alt)
{
    echo "<div align=\"center\"><a href=\"" . $target . "\"><img src=\"images/" . $image . ".gif\" alt=\"" . $alt . "\" border=\"0\" height=\"50\" width=\"135\"/></a></div>";
}

function display_categories($cat_array)
{
    if (!is_array($cat_array)) {
        echo "<p>No categories currently avaiable</p>";
        return;
    }
    echo "<ul>";
    foreach ($cat_array as $row) {
        $url   = "show_cat.php?catid=" . $row['catid'];
        $title = $row['catname'];

        echo "<li>";

        do_html_url($url, $title);

        echo "</li>";
    }

    echo "</ul><hr/>";
}

function do_html_url($url, $name)
{
    ?>
<a href="<?php echo $url; ?>"><?php echo $name; ?></a><br/>
<?php
}

function display_books($book_array)
{
    if (!is_array($book_array)) {
        echo "<p>No books currently available in this category</p>";
    } else {
        echo "<table width=\"100%\" border=\"0\">";

        foreach ($book_array as $row) {
            $url = "show_book.php?isbn=" . $row['isbn'];

            echo "<tr><td>";

            if (@file_exists("images/" . $row['isbn'] . ".jpg")) {
                $title = "<img src=\"images/" . $row['isbn'] . ".jpg\" style=\"border:1px solid black\"/>";

                do_html_url($url, $title);
            } else {
                echo "&nbsp;";
            }

            echo "</td><td>";

            $title = $row['title'] . " by " . $row['author'];

            do_html_url($url, $title);

            echo "</td></tr>";
        }
        echo "</table>";
    }
    echo "<hr/>";

}

function display_book_details($book)
{
    if (is_array($book)) {
        echo "<table><tr>";

        if (@file_exists("images/" . $book['isbn'] . ".jpg")) {
            $size = getimagesize("images/" . $book['isbn'] . ".jpg");

            if (($size[0] > 0) && ($size[1] > 0)) {
                echo "<td><img src=\"images/" . $book['isbn'] . ".jpg\" style=\"border:1px solid black\"/></td>";
            }
        }

        echo "<td><ul>";
        echo "<li><strong>Author:</strong>";
        echo $book['author'];
        echo "</li><li><strong>ISBN:</strong>";
        echo $book['isbn'];
        echo "</li><li><strong>Our Price:</strong>";
        echo number_format($book['price'], 2);
        echo "</li><li><strong>Description:</strong>";
        echo $book['description'];
        echo "</li></ul></td></tr></table>";
    } else {
        echo "<p>The details of this book cannot be displayed at this time.</p>";
    }
    echo "<hr/>";
}

function display_cart($cart, $change = true, $images = 1)
{
    echo "<table border=\"0\" width=\"100%\" cellspacing=\"0\"><form action=\"show_cart.php\" method=\"post\">
        <tr><th colspan=\"" . (1 + $images) . "\" bgcolor=\"#ccc\">Item</th><th bgcolor=\"#ccc\">Item</th><th bgcolor=\"#ccc\">Quantity</th><th bgcolor=\"#ccc\">Total</th>";

    foreach ($cart as $isbn => $qty) {
        $book = get_book_details($isbn);

        echo "<tr>";

        if ($images == true) {
            echo "<td align=\"left\">";

            if (file_exists("images/" . $isbn . ".jpg")) {
                $size = getimagesize("images/" . $isbn . ".jpg");
                if (($size[0] > 0) && ($size[1] > 0)) {
                    echo "<img src=\"images/" . $isbn . ".jpg\" style=\"border:1px solid black\" width=\"" . ($size[0] / 3) . "\" height=\"" . ($size[1] / 3) . "\"/>";
                }
            } else {
                echo "&nbsp";
            }
            echo "</td>";
        }

        echo "<td align=\"left\"><a href=\"show_book.php?isbn=" . $isbn . "\">" . $book['title'] . "</a> by " . $book['author'] . "</td><td align=\"center\">\$" . number_format($book['price'], 2) . "</td><td align=\"center\">";

    }
}
