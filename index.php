<?php

require __DIR__ . '/vendor/autoload.php';

use App\Utils\Database;
use App\Controller\ApiController;

// On affiche les erreurs
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// On récupère les valeurs relatives à la base de données dans le fichier de config
require_once 'config.php';
// On se sert des valeurs récupérés pour créé notre objet Database
$database = new Database('mysql:dbname=' . $dbname .';host=127.0.0.1', $dbUser, $dbPassword);

// On récupère la valeur de la super globale GET (appelé depuis le front)
$action = filter_input(INPUT_GET, 'action');

// On instancie notre controller
$apiController = new ApiController();

// On se sert de la valeur pour décider sur quelle méthode du controller on part
if ($action == 'browse') {
    // TODO On envoi les 10 derniers meilleurs scores via l'ApiController
    $apiController->getScores($database);

} else if ($action == 'add') {
    // TODO On ajoute le score à dans la BDD via l'ApiController

} else {
    // Si on est sur l'url classique du memory, on l'affiche
    include __DIR__ . '/' . 'public/memory.html';
}