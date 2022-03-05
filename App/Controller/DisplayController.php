<?php

namespace App\Controller;


/**
 * Ce controller est appeler pour gérer l'affichage et la transmission des données à la vue
 */
class DisplayController {
    public static function display($view, array $data) {
        extract($data);

        include __DIR__ . '/../views/header.tmpl.php';
        include __DIR__ . '/../views/' . $view . '.tmpl.php';
    }
}