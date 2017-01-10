<?php 
    // Iterator extends Traversable {
    //   /* 方法 */
    //   abstract public mixed current ( void )
    //   abstract public scalar key ( void )
    //   abstract public void next ( void )
    //   abstract public void rewind ( void )
    //   abstract public boolean valid ( void )
    // }
class myIterator implements Iterator{
  private $position = 0;
  private $array = array(
    "firstelement",
    "secondelement",
    "lastelement"
  );

  public function __constructor(){
    $this->position = 0;
  }

  function rewind(){
    var_dump(__METHOD__);
    $this->position=0;
  }

  function current(){
    var_dump(__METHOD__);
    return $this->array[$this->position];
  }

  function key(){
    var_dump(__METHOD__);
    return $this->position;
  }

  function next(){
    var_dump(__METHOD__);
    ++$this->position;
  }

  function valid(){
    var_dump(__METHOD__);
    return isset($this->array[$this->position]);
  }
}

$myIt = new myIterator();
echo "<pre>";
foreach($myIt as $key=>$value){
  var_dump($key,$value);
  echo '\n';
}
echo "</pre>";

?>
