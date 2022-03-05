<?php

namespace App\Controller;

use App\Controller\DisplayController;
use App\Model\Game;

class MainController extends DisplayController
{

    public function __construct()
    {   
        
    }

    /**
     * Appel l'affichage de la page principale du site
     *
     * @param array $data les données à transmettre à la vue
     * @return void
     */
    public function mainPage($data)
    {
        $this->display('main', $data);
    }

}