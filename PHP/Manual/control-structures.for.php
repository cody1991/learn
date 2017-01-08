<?php  
$people = Array(
  Array("name"=>"kalle","salt"=>856412),
  Array("name"=>"pierre","salt"=>215863)
);
for($i=0,$size=count($people);$i<$size;++$i){
  $people[$i]['salt'] = rand(00000,99999);
}

var_dump($people)
?>
