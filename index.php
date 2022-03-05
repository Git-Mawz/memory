<?php
require __DIR__ . '/vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use App\Controller\MainController as MainController;

$baseURI = "http://" . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];

$controller = new MainController();

$data = [
    'baseURI' => $baseURI
];

$controller->mainPage($data);