<?php
// functions for loading, contructing and
// displaying the tree are in this file

class treenode {
  // each node in the tree has member variables containing
  // all the data for a post except the body of the message
  public $m_postid;
  public $m_title;
  public $m_poster;
  public $m_posted;
  public $m_children;
  public $m_childlist;
  public $m_depth;

  public function __construct($postid, $title, $poster, $posted, $children,
                    $expand, $depth, $expanded, $sublist)   {
    // the constructor sets up the member variables, but more
    // importantly recursively creates lower parts of the tree
    $this->m_postid = $postid;
    $this->m_title = $title;
    $this->m_poster = $poster;
    $this->m_posted = $posted;
    $this->m_children =$children;
    $this->m_childlist = array();
    $this->m_depth = $depth;

    // we only care what is below this node if it
    // has children and is marked to be expanded
    // sublists are always expanded
    if(($sublist || $expand) && $children) {
      $conn = db_connect();

      $query = "select * from header where parent = '".$postid."' order by posted";
      $result = $conn->query($query);

      for ($count=0; $row = @$result->fetch_assoc(); $count++)  {
        if($sublist || $expanded[$row['postid']] == true) {
          $expand = true;
        } else {
          $expand = false;
        }
        $this->m_childlist[$count]= new treenode($row['postid'],$row['title'],
                   $row['poster'],$row['posted'],
                   $row['children'], $expand,
                   $depth+1, $expanded, $sublist);
      }
    }
  }


  function display($row, $sublist = false)   {
    // as this is an object, it is responsible for displaying itself

    // $row tells us what row of the display we are up to
    // so we know what color it should be

    // $sublist tells us whether we are on the main page
    // or the message page.  Message pages should have
    // $sublist = true.
    // On a sublist, all messages are expanded and there are
    // no "+" or "-" symbols.

    // if this is the empty root node skip displaying
    if($this->m_depth>-1) {
      //color alternate rows
      echo "<tr><td bgcolor=\"";
      if ($row%2) {
        echo "#cccccc\">";
      } else {
        echo "#ffffff\">";
      }

      // indent replies to the depth of nesting
      for($i = 0; $i < $this->m_depth; $i++)  {
        echo "<img src=\"images/spacer.gif\" height=\"22\"
                   width=\"22\" alt=\"\" valign=\"bottom\" />";
      }

      // display + or - or a spacer
      if ( !$sublist && $this->m_children && sizeof($this->m_childlist)) {
      // we're on the main page, have some children, and they're expanded

        // we are expanded - offer button to collapse
        echo "<a href=\"index.php?collapse=".
                 $this->m_postid."#".$this->m_postid."\"><img
                 src=\"images/minus.gif\" valign=\"bottom\" height=\"22\"
                 width=\"22\" alt=\"Collapse Thread\" border=\"0\" /></a>\n";
      } else if(!$sublist && $this->m_children) {
        // we are collapsed - offer button to expand
        echo "<a href=\"index.php?expand=".
                 $this->m_postid."#".$this->m_postid."\"><img
                 src=\"images/plus.gif\" valign=\"bottom\" height=\"22\"
                 width=\"22\" alt=\"Expand Thread\" border=\"0\" /></a>\n";
      }  else  {
        // we have no children, or are in a sublist, do not give button
        echo "<img src=\"images/spacer.gif\" height=\"22\" width=\"22\"
                   alt=\"\" valign=\"bottom\"/>\n";
      }

      echo "<a name=\"".$this->m_postid."\"><a href=
               \"view_post.php?postid=".$this->m_postid."\">".
               $this->m_title." - ".$this->m_poster." - ".
               reformat_date($this->m_posted)."</a></td></tr>";

      // increment row counter to alternate colors
      $row++;
    }
    // call display on each of this node's children
    // note a node will only have children in its list if expanded
    $num_children = sizeof($this->m_childlist);
    for($i = 0; $i<$num_children; $i++) {
      $row = $this->m_childlist[$i]->display($row, $sublist);
    }
    return $row;
  }

}



?>
