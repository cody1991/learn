<?php

   chdir('/uploads/');

///// exec version
   echo '<pre>';
   
   // unix
   exec('ls -la', $result);
   // windows
   // exec('dir', $result);
   foreach ($result as $line) 
     echo "$line\n";

   echo '</pre>';
   echo '<br><hr><br>';

///// passthru version
   echo '<pre>';
   
   // unix
   passthru('ls -la');
   // windows
   // passthru('dir');

   echo '</pre>';
   echo '<br><hr><br>';
 
///// system version 
   
   echo '<pre>';
   // unix
   $result = system('ls -la');
   // windows
   // $result = system('dir');
   echo '</pre>';
   echo '<br><hr><br>';

/////backticks version
   
   echo '<pre>';
   // unix
   $result = `ls -al`;
   // windows
   // $result = `dir`;
   echo $result;
   echo '</pre>';

?>

