<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
class fileOpenException extends Exception
{
    public function __toString()
    {
        return 'fileOpenException ' . $this->getCode() . " : " . $this->getMessage() . "<br/>"
        . $this->getFile() . " on line " . $this->getLine() . "<br/>";
    }
}
class fileWriteException extends Exception
{
    public function __toString()
    {
        return 'fileWriteException ' . $this->getCode() . " : " . $this->getMessage() . "<br/>"
        . $this->getFile() . " on line " . $this->getLine() . "<br/>";
    }
}

class fileLockException extends Exception
{
    public function __toString()
    {
        return 'fileLockException ' . $this->getCode() . " : " . $this->getMessage() . "<br/>"
        . $this->getFile() . " on line " . $this->getLine() . "<br/>";
    }
}
?>
</body>
</html>
