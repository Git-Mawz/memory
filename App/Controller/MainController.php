<?php

namespace App\Controller;

use App\Controller\DisplayController;
use App\Model\Game;

class MainController extends DisplayController
{

    public function __construct()
    {   
        
    }

    public function mainPage($data)
    {
        $this->display('main', $data);
    }

}