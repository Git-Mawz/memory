<?php

namespace App\Utils;

/**
 * Class de liaison avec la BDD.
 * Elle étend la class PDO ce qui nous permet d'accéder à ses méthodes.
 * Ne pas oublier que le consctuct de la class étendu est présent, il faut transmettre à la class Database les argument attendu par PDO
 */
class Database extends \PDO
{
    /**
     * Récupère tout les scores au jeu
     *
     * @return array
     */
    public function findAll()
    {   
        $query ='
            SELECT * from `scores`
            ORDER BY `elapsed_time`
            LIMIT 10
        ';
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
        // On utilise la methode "prepare" de PDO pour se protéger des injections SQL
        $statement = $this->prepare('INSERT INTO `scores` (elapsed_time) VALUES (:time)');
        $result = $statement->execute(['time' => $time]);

        return $result;

    }
}