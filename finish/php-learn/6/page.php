<?php
class Page
{
    public $content;
    public $title    = "cody php";
    public $keywords = "cody php learn";

    public $buttons = array(
        "Home"     => "home.php",
        "Contact"  => "contact.php",
        "services" => "services.php",
        "site map" => "map.php",
    );

    public function __set($name, $value)
    {
        $this->$name = $value;
    }

    public function Display()
    {
        echo "<html>\n<head>\n";
        $this->DisplayTitle();
        $this->DisplayKeywords();
        $this->DisplayStyles();

        echo "</head>\n<body>\n";

        $this->DisplayHeader();
        $this->DisplayMenu($this->buttons);

        echo $this->content;
        $this->DisplayFooter();

        echo "</body>\n</html>\n";
    }

    public function DisplayTitle()
    {
        echo "<title>" . $this->title . "</title>";
    }

    public function DisplayKeywords()
    {
        echo "<meta name=\"keywords\" content=\"" . $this->keywords . "\"/>";
    }

    public function DisplayStyles()
    {

    }

    public function DisplayHeader()
    {

    }

    public function DisplayMenu($buttons)
    {
        // print_r($buttons);

        echo "<table width=\"100%\" bgcolor=\"white\" cellpadding=\"4\" cellspacing=\"4\">\n";
        echo "<tr>\n";

        $width = 100 / count($buttons);

        while (list($name, $url) = each($buttons)) {
            $this->DisplayButton($width, $name, $url, !$this->IsURLCurrentPage($url));
        }

        echo "</tr>\n";
        echo "</table>\n";
    }

    public function IsURLCurrentPage($url)
    {
        // echo $_SERVER['PHP_SELF'];
        if (strpos($_SERVER['PHP_SELF'], $url) == false) {
            return false;
        } else {
            return true;
        }
    }

    public function DisplayButton($width, $name, $url, $active = true)
    {
        if ($active) {
            echo "<td width=\"" . $width . "%\">
                <a href=\"" . $url . "\">
                <span class=\"menu\">" . $name . "</span></a></td>";
        } else {
            echo "<td width=\"" . $width . "%\">
            <span class=\"menu\">" . $name . "</span></td>";
        }
    }

    public function DisplayFooter()
    {
        echo "<p>Footer</p>";
    }
}
