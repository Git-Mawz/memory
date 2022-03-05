<?php

namespace App\Controller;

class ApiController
{
    /**
     * Methode pour enregistrer les scores
     *
     * @return void
     */
    public function getScores($database)
    {
        $rawData = $database->findAll();
        echo json_encode($rawData);
    }

    /**
     * Méthode pour envoyer les scores
     *
     * @return void
     */
    public function insertScore()
    {

    }

}