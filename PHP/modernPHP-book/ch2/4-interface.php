<?php 

class CommandOutputDocument implements Documentable{
  protected $command;

  public function __construct($command){
    $this->command = $command;
  }
  public function getId(){
    return $this->command;
  }
  public function getContent(){
    return shell_exec($this->command);
  }
}

class StreamDocument implements Documentable{
  protected $resource;
  protected $buffer;

  public function __construct($resource,$buffer=4096){
    $this->resource = $resource;
    $this->buffer = $buffer;
  }

  public function getId(){
    return 'resource-' . (int)$this->resource;
  }

  public function getContent(){
    $streamContent = '';
    rewind($this->resource);

    while(feof($this->resource)===FALSE){
      $streamContent .= fread($this->resource,$this->buffer);
    }

    return $streamContent;
  }
}

class HtmlDocument implements Documentable{
  protected $url;
  public function __construct($url){
    $this->url = $url;
  }
  public function getId(){
    return $this->url;
  }
  public function getContent(){
    $myCh = curl_init();
    curl_setopt($myCh,CURLOPT_URL,$this->url);
    curl_setopt($myCh, CURLOPT_RETURNTRANSFER,1);
    curl_setopt($myCh, CURLOPT_CONNECTTIMEOUT, 0);
    curl_setopt($myCh, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($myCh, CURLOPT_MAXREDIRS, 3);
    $html = curl_exec($myCh);
    curl_close($myCh);
    return $html;
  }
}

interface Documentable{
  public function getId();
  public function getContent();
}

class DocumentStore{
  protected $data = [];

  public function addDocument(Documentable $document){
    $key = $document->getId();
    $value = $document->getContent();
    $this->data[$key] = $value;
  }

  public function getDocuments(){
    return $this->data;
  }
}

$documentStore = new DocumentStore();

$htmlDoc = new HtmlDocument('https://www.baidu.com/');
$documentStore->addDocument($htmlDoc);

$streamDoc = new StreamDocument(fopen('composer.json','rb'));
$documentStore->addDocument($streamDoc);

$cmdDoc = new CommandOutputDocument('ls');
$documentStore->addDocument($cmdDoc);

echo '<pre>';
print_r($documentStore->getDocuments());
echo '</pre>';

?>
