<?php

namespace App\Utils;

class Database extends \PDO
{
    /**
     * Récupère tout les scores au jeu
     *
     * @return void
     */
    public function findAll()
    {   
        $query ='SELECT * from `scores`';
        $statement = $this->query($query);
        return $statement->fetchAll(self::FETCH_ASSOC);
    }

    /**
     * Ajoute un score en base de données
     *
     * @param int $time
     * @return string 
     */
    public function insertScore($time)
    {
        $statement = $this->prepare('INSERT INTO `scores` (elapsed_time) VALUES (:time)');
        $result = $statement->execute(['time' => $time]);

        if ($result) {
            return 'Score ajouté';
        } else {
            return 'Une erreur s\'est produite';
        }

    }
}