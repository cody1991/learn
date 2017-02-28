<?php

// Exception 42: A terrible error has occurred
// in /Users/cody1991/Desktop/github/learn/PHP/php&mysql/ch7/1.php on line 4
try {
	throw new Exception('A terrible error has occurred', 42);
} catch (Exception $e) {
	echo "Exception " . $e->getCode() . ": " . $e->getMessage() . "<br/>" .
	" in " . $e->getFile() . " on line " . $e->getLine() . "<br/>";

	echo $e;
}

class myException extends Exception {
	function __toString() {
		return "<table border=\"1\"
    <tr>
      <td>
        <strong>Exception " .
		$this->getCode() .
		"</strong>: " .
		$this->getMessage() . ". <br/> in " .
		$this->getFile() . " on line " .
		$this->getLine() . "
      </td>
    </tr>
    </table>
    ";
	}
}

try {
	throw new myException('A terrible error has occurred', 42);
} catch (myException $e) {
	echo $e;
}

?>
