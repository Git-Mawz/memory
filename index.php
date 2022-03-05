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
// On se sert des valeurs récupérés pour instancier notre objet Database une seule fois
$database = new Database('mysql:dbname=' . $dbname .';host=127.0.0.1', $dbUser, $dbPassword);

// On instancie notre controller et on lui transmet l'objet database
$apiController = new ApiController($database);

// On récupère la valeur de la super globale GET (appelé depuis le front)
$action = filter_input(INPUT_GET, 'action');
// On récupère la valeur de l'input POST "time"
$scoreValue = filter_input(INPUT_POST, 'time');



// En fonction de la valeur qu'on récupère on décide de la méthode du controller à appeler
if ($action == 'browse') {
    // On récupère les scores enregistrés
    $apiController->getScores();
} else if ($scoreValue) {
    // On inscrit un nouevau score en BDD
    $apiController->addScore($scoreValue);
} else {
    // Si on est sur l'url classique du memory, on l'affiche
    include __DIR__ . '/' . 'public/memory.html';
}