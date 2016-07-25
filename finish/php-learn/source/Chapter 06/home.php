<?php
  require("page.inc");

  $homepage = new Page();

  $homepage->content ="<p>Welcome to the home of TLA Consulting.
                       Please take some time to get to know us.</p>
                       <p>We specialize in serving your business needs
                       and hope to hear from you soon.</p>";
  $homepage->Display();
?>
