<?php
require 'vendor/autoload.php';

use Symfony\Component\HttpFoundation\Response as Response;

$response = new Response('Oops', 400);
$response->send();
?>
