<?php

namespace App\Utils;

/**
 * Class de liaison avec la BDD.
 * Elle étend la class PDO ce qui nous permet d'accéder à ses méthodes.
 * Ne pas oublier que le consctuct de la class étendu est présent, il faut transmettre à la class Database les argument attendu par la class PDO
 */
class Database extends \PDO
{
    /**
     * Récupère les 10 meilleurs scores en BDD
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
     * Ajoute un score en BDD
     *
     * @param int $time
     * @return boolean
     */
    public function insertScore($time)
    {
        // On utilise la methode "prepare" de PDO pour se protéger des injections SQL
        $statement = $this->prepare('INSERT INTO `scores` (elapsed_time) VALUES (:time)');
        $result = $statement->execute(['time' => $time]);

        return $result;

    }
}