<?php
class Page {
	protected $content;
	private $title = 'TLA Consulting Pty Ltd';
	private $keywords = 'TLA Consulting';
	protected $buttons = array(
		"Home" => "home.php",
		"Contact" => "contact.php",
		"Services" => "services.php",
	);

	public function __set($name, $value) {
		$this->$name = $value;
	}

	public function Display() {
		echo "<html>\n<head>\n";
		$this->DisplayTitle();
		$this->DisplayKeywords();
		$this->DisplayStyle();

		echo "</head>\n<body>\n";
		$this->DisplayHeader();
		$this->DisplayMenu($this->buttons);
		echo $this->content;
		$this->DisplayFooter();
		echo "</body>\n</html>\n";
	}

	function DisplayTitle() {
		echo "<title>" . $this->title . "</title>";
	}

	function DisplayKeywords() {
		echo "<meta name=\"keywords\" content=\"" . $this->keywords . "\"/>";
	}

	function DisplayStyle() {
		?>

<style>
  h1 {
    color:white;
    font-size:24px;
    text-align: center;
  }
  .menu{
    color:white;
    font-size: 12px;
    text-align: center;
  }
  td{
    background-color: black;
  }
  p{
    color:black;
    font-size:12px;
    text-align: justify;

  }
  .foot{
    color:white;
    font-size: 9px;
    text-align: center;
  }
  a{
    color:white;
  }
</style>

<?php
}

	function DisplayHeader() {
		?>

<table width="100%" cellpadding="12" cellspacing="0" border="0">
  <tr bgcolor="black">
    <td align="left">
      Logo
    </td>
    <td>
      <h1>
        TLA Consulting Pty Ltd
      </h1>
    </td>
    <td align="right">
      Logo
    </td>
  </tr>
</table>

<?php
}

	function DisplayMenu($buttons) {
		echo "<table class=\"menu\" width=\"100%\" bgcolor=\"white\" cellpadding=\"4\" cellspacing=\"4\">\n";
		echo "<tr>\n";

		$width = 100 / count($buttons);

		while (list($name, $url) = each($buttons)) {
			$this->DisplayButton($width, $name, $url, !$this->IsURLCurrentPage($url));
		}

		echo "</tr>\n";
		echo "</table>\n";
	}

	function IsURLCurrentPage($url) {
		if (strpos($_SERVER['PHP_SELF'], $url) == false) {
			return false;
		}
		return true;
	}

	function DisplayButton($width, $name, $url, $active = true) {
		if ($active) {
			echo "<td width=\"$width%\">
        <a href=\"$url\">
        $name</a>
      ";
		} else {
			echo "<td width=\"$width%\">
        <span>
        $name</span>
      ";
		}
	}

	function DisplayFooter() {
		?>

<table width="100%" bgcolor="black" cellpadding="12" border="0">
  <tr>
    <td>
      <p class="foot">
        &copy; TLA Consulting Pty Ltd.
      </p>
      <p class="foot">
        Please see our legal information page
      </p>
    </td>
  </tr>
</table>

<?php
}
}
?>

