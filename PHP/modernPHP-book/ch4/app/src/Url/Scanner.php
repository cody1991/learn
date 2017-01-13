<?php
  namespace Cody\ModernPHP\Url;

  use GuzzleHttp\Client;

  class Scanner {
    protected $urls;

    protected $httpClient;

    public function __construct(array $urls)
    {
      $this->urls = $urls;
      $this->httpClient = new Client();
    }

    public function getInvalidUrls()
    {
      $invalidUrls = [];

      foreach ($this->urls as $url) {
        try {
          $statusCode = $this->getStatusCodeForUrl($url);
        } catch (\Exception $e) {
          $statusCode = 500;
        }

        echo $statusCode;

        if ($statusCode >= 400) {
          array_push($invalidUrls, [
              'url' => $url,
              'status' => $statusCode
            ]);
        }
      }

      return $invalidUrls;
    }

    public function getStatusCodeForUrl($url)
    {
      $httpResponse = $this->httpClient->options($url);

      echo "<pre>";
      print_r($httpResponse);
      echo "</pre>";


      return $httpResponse->getStatusCode();
    }
  }
