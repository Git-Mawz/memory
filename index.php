<?php
require __DIR__ . '/vendor/autoload.php';

// On affiche les erreurs
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use App\Controller\MainController;

// CONFIG
$appDirectory = 'memory_game';
// CONFIG

// On récupère l'url de base pour l'affichage des assets
$baseURI = "http://" . $_SERVER['SERVER_NAME'] . '/' . $appDirectory;
// On la passe dans un tableau qui sera transmis au controller
$data = [
    'baseURI' => $baseURI
];

$controller = new MainController();

$controller->mainPage($data);