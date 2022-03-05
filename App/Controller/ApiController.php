<?php

namespace App\Controller;

class ApiController
{

    private $database;

    public function __construct($database)
    {
        $this->database = $database;
    }

    /**
     * Methode pour enregistrer les scores
     *
     * @return json
     */
    public function getScores()
    {
        $rawData = $this->database->findAll();
        echo json_encode($rawData);
    }

    /**
     * Méthode pour enregister un score en base de donnée
     *
     * @return json
     */
    public function addScore($time)
    {
        $result = $this->database->insertScore($time);
        echo json_encode(['result' => $result]);
    }

}