<?php
// for one of our known browsenodes, get name
function getCategoryName($browseNode) {
  global $categoryList;

  if(isset($categoryList[$browseNode]))  {
    return $categoryList[$browseNode];
  } else  {
    return '';
  }
}

//display a starting list of popular categories
function showCategories($mode) {
  global $categoryList;
  echo "<hr/><h2>Selected Categories</h2>";

  if($mode == 'Books')  {

   asort($categoryList);

    $categories = count($categoryList);
    $columns = 4;
    $rows = ceil($categories/$columns);

    echo "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"><tr>";

    reset($categoryList);

    for($col = 0; $col<$columns; $col++) {
      echo "<td width=\"".(100/$columns)."%\" valign=\"top\"><ul>";
      for($row = 0; $row<$rows; $row++) {
        $category = each($categoryList);
        if($category) {
          $browseNode = $category['key'];
          $name = $category['value'];
          echo "<li><span class=\"category\">
                <a href=\"index.php?action=browsenode&browseNode=".$browseNode."\">"
                .$name."</a></span></li>";
        }
      }
      echo "</ul></td>";
    }
    echo "</tr></table><hr/>";
  }
}

?>