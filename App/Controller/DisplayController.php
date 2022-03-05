<?php

namespace App\Controller;


/**
 * Ce controller est appeler pour gérer l'affichage et la transmission des données à la vue
 */
class DisplayController {

    /**
     * Undocumented function
     *
     * @param string $view le nom de la vue
     * @param array $data le tableau de données à transmettre à la vue
     * @return void
     */
    public static function display($view, array $data) {
        extract($data);
        include __DIR__ . '/../views/header.tmpl.php';
        include __DIR__ . '/../views/' . $view . '.tmpl.php';
    }

}