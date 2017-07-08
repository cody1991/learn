<?php
require "Page.inc";

class ServicesPage extends Page {
	private $row2buttons = array(
		"engineer" => "engineer.php",
		"standard" => "standard.php",
		"buzz" => "buzz.php",
		"mission" => "mission.php",
	);

	public function display() {
		echo "<html><head>";
		$this->displayTitle();
		echo "</head><body>";
		$this->displayMenu($this->buttons);
		$this->displayMenu($this->row2buttons);
		echo $this->content;
		echo "</body></html>";
	}
}

$homepage = new ServicesPage();
$homepage->content = "<p>Welcome to services</p>";
$homepage->display();
?>
