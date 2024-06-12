<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route(['/'], name: 'app_default', requirements:["route"=>".+"])]
    public function homepage(): Response
    {
        return $this->redirectToRoute('api_entrypoint');
    }
}
