<?php

namespace App\Controller;

/**
 * l'ApiController fait l'affichage et la reception des données
 */
class ApiController
{

    private $database;

    public function __construct($database)
    {
        $this->database = $database;
    }

    /**
     * Methode pour enregistrer les scores
     */
    public function getScores()
    {
        $rawData = $this->database->findAll();
        echo json_encode($rawData);
    }

    /**
     * Méthode pour enregister un score en base de donnée
     */
    public function addScore($time)
    {
        $result = $this->database->insertScore($time);
        if($result) {
            header('HTTP/1.1 201 Created');
            echo json_encode(['result' => $result]);
        }
    }

}