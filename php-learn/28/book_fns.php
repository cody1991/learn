<?php
function calculate_shipping_cost()
{
    return 20.00;
}

function get_categories()
{
    $conn = db_connect();

    $query  = "select catid,catname from categories";
    $result = @$conn->query($query);

    if (!$result) {
        return false;
    }

    $num_cats = @$result->num_rows;
    if ($num_cats == 0) {
        return false;
    }

    $result = db_result_to_array($result);
    return $result;
}

function get_category_name($catid)
{
    $conn   = db_connect();
    $query  = "select catname from categories where catid = '" . $catid . "'";
    $result = @$conn->query($query);
    if (!$result) {
        return false;
    }

    $num_cats = @$result->num_rows;

    if ($num_cats == 0) {
        return false;
    }

    $row = $result->fetch_object();

    return $row->catname;
}

function get_books($catid)
{
    if ((!$catid) || ($catid == '')) {
        return false;
    }
    $conn  = db_connect();
    $query = "select * from books where catid = '" . $catid . "'";

    $result = @$conn->query($query);
    if (!$result) {
        return false;
    }
    $num_books = @$result->num_rows;
    if ($num_books == 0) {
        return false;
    }
    $result = db_result_to_array($result);
    return $result;
}
