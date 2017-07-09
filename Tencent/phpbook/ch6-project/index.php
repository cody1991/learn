<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <form action="results.php" method="post">
    <select name="searchtype">
      <option value="author">
        Author
      </option>
      <option value="title">
        Title
      </option>
      <option value="isbn">
        ISBN
      </option>
    </select>
    <input type="searchterm" name="searchterm">
    <input type="submit" value="search">
  </form>
</body>
</html>
