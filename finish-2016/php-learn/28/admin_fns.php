<?php
function display_book_form($book = '')
{
    $edit = is_array($book);

    ?>

  <form method="post"
        action="<?php echo $edit ? 'edit_book.php' : 'insert_book.php'; ?>">
  <table border="0">
  <tr>
    <td>ISBN:</td>
    <td><input type="text" name="isbn"
         value="<?php echo $edit ? $book['isbn'] : ''; ?>" /></td>
  </tr>
  <tr>
    <td>Book Title:</td>
    <td><input type="text" name="title"
         value="<?php echo $edit ? $book['title'] : ''; ?>" /></td>
  </tr>
  <tr>
    <td>Book Author:</td>
    <td><input type="text" name="author"
         value="<?php echo $edit ? $book['author'] : ''; ?>" /></td>
   </tr>
   <tr>
      <td>Category:</td>
      <td><select name="catid">
      <?php
// list of possible categories comes from database
    $cat_array = get_categories();
    foreach ($cat_array as $thiscat) {
        echo "<option value=\"" . $thiscat['catid'] . "\"";
        // if existing book, put in current catgory
        if (($edit) && ($thiscat['catid'] == $book['catid'])) {
            echo " selected";
        }
        echo ">" . $thiscat['catname'] . "</option>";
    }
    ?>
          </select>
        </td>
   </tr>
   <tr>
    <td>Price:</td>
    <td><input type="text" name="price"
               value="<?php echo $edit ? $book['price'] : ''; ?>" /></td>
   </tr>
   <tr>
     <td>Description:</td>
     <td><textarea rows="3" cols="50"
          name="description"><?php echo $edit ? $book['description'] : ''; ?></textarea></td>
    </tr>
    <tr>
      <td <?php if (!$edit) {echo "colspan=2";}?> align="center">
         <?php
if ($edit)
    // we need the old isbn to find book in database
    // if the isbn is being updated
    {
        echo "<input type=\"hidden\" name=\"oldisbn\"
                    value=\"" . $book['isbn'] . "\" />";
    }

    ?>
        <input type="submit"
               value="<?php echo $edit ? 'Update' : 'Add'; ?> Book" />
        </form></td>
        <?php
if ($edit) {
        echo "<td>
                   <form method=\"post\" action=\"delete_book.php\">
                   <input type=\"hidden\" name=\"isbn\"
                    value=\"" . $book['isbn'] . "\" />
                   <input type=\"submit\" value=\"Delete book\"/>
                   </form></td>";
    }
    ?>
         </td>
      </tr>
  </table>
  </form>

<?php
}

function insert_book($isbn, $title, $author, $catid, $price, $description)
{
    $conn = db_connect();

    $query = "select * from books where isbn = '" . $isbn . "'";

    $result = $conn->query($query);
    if ((!$result) || ($result->num_rows != 0)) {
        return false;
    }

    $query = "insert into books values ('" . $isbn . "','" . $author . "','" . $title . "','" . $catid . "','" . $price . "','" . $description . "')";

    echo $query;

    $result = $conn->query($query);
    if (!$result) {
        return false;
    } else {
        return true;
    }
}

function update_book($oldisbn, $isbn, $title, $author, $catid,
    $price, $description) {
// change details of book stored under $oldisbn in
    // the database to new details in arguments

    $conn = db_connect();

    $query = "update books
             set isbn= '" . $isbn . "',
             title = '" . $title . "',
             author = '" . $author . "',
             catid = '" . $catid . "',
             price = '" . $price . "',
             description = '" . $description . "'
             where isbn = '" . $oldisbn . "'";

    $result = @$conn->query($query);
    if (!$result) {
        return false;
    } else {
        return true;
    }
}

function delete_book($isbn)
{
    $conn = db_connect();

    $query = "delete from books where isbn='" . $isbn . "'";

    $result = @$conn->query($query);
    if (!$result) {
        return false;
    } else {
        return true;
    }
}
