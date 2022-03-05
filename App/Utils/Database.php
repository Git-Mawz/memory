<?php

namespace App\Utils;

class Database extends \PDO
{
    public function findAll()
    {   

        $query =
            '
            SELECT * from `scores`
            '
        ;

        $statement = $this->query($query);

        return $statement->fetchAll(self::FETCH_ASSOC);
    }
}