<?php

namespace App\Controller;

/**
 * l'ApiController fait l'envoi et la reception des données
 */
class ApiController
{
    // Notre objet database
    private $database;

    public function __construct($database)
    {
        $this->database = $database;
    }

    /**
     * Methode pour récupérer les scores en BDD
     */
    public function getScores()
    {
        $data = $this->database->findAll();
        echo json_encode($data);
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