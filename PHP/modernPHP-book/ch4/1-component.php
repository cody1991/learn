<?php
  // composer.phar require guzzlehttp/guzzle
  // composer.phar require league/csv

  require 'vendor/autoload.php';

  use GuzzleHttp\Client;
  use League\Csv\Reader;

  $client = new Client();
  // $argv[1] 参数
  // $csv = new Reader($argv[1]);
  $csv = Reader::createFromPath('urls.csv');

  foreach($csv as $csvRow) {
    try {
      $httpResponse = $client->options($csvRow[0]);

      echo "<pre>";
      print_r($httpResponse);
      echo "</pre>";


      if ($httpResponse->getStatusCode() >= 400) {
        throw new \Exception();
      }
    } catch (\Exception $e) {
      echo $csvRow[0] . PHP_EOL;
    }
  }
