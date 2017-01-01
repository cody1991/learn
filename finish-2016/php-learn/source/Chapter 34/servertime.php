<?php
header('Content-Type: text/xml');
echo "<?xml version=\"1.0\" ?>
      <clock>
        <timestring>It is ".date('H:i:s')." on ".date('M d, Y').".</timestring>
      </clock>";
?>
