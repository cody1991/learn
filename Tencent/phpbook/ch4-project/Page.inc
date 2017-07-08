<?php

class Page {
	public $content;
	public $title = "Cody learning PHP";

	public $buttons = array(
		"Home" => "home.php",
		"Contact" => "contact.php",
		"Services" => "services.php",
		'Map' => "map.php",
	);

	public function __set($name, $value) {
		$this->$name = $value;
	}

	public function display() {
		echo "<html><head>";
		$this->displayTitle();
		echo "</head><body>";
		$this->displayMenu($this->buttons);
    echo "<br/>";
		echo $this->content;
		echo "</body></html>";
	}

  public function displayTitle(){
    echo "<title>" . $this->title . "</title>";
  }

  public function displayMenu($buttons){
    while(list($name,$url)=each($buttons)){
      $this->displayButton($name,$url,!$this->isCurrentPage($url));
    }
  }

  public function displayButton($name,$url,$active=true){
    if($active){
      echo "<a href=\"" . $url . "\"><span>" . $name . "</span></a> ";
    }else{
      echo "<span>" . $name . "</span> ";
    }
  }

  public function isCurrentPage($url){
    if(strpos($_SERVER['PHP_SELF'],$url) == false){
      return false;
    }else {
      return true;
    }
  }
}

?>
