<?php
include "page.php";

class ServicesPage extends Page
{
    private $row2buttons = array(
        "new1" => "new1.php",
        "new2" => "new2.php",
        "new3" => "new3.php",
        "new4" => "new4.php",
    );

    public function Display()
    {
        echo "<html>\n<head>\n";
        $this->DisplayTitle();
        $this->DisplayKeywords();
        $this->DisplayStyles();

        echo "</head>\n<body>\n";

        $this->DisplayHeader();
        $this->DisplayMenu($this->buttons);
        $this->DisplayMenu($this->row2buttons);

        echo $this->content;
        $this->DisplayFooter();

        echo "</body>\n</html>\n";
    }

}

$services          = new ServicesPage();
$services->content = "services page";
$services->Display();
