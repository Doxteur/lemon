<?php

namespace App\Controller\Api;

use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

#[AsController]
class CartController extends AbstractController
{
    
    #[Route( name: 'cart_submit', methods: ['POST'], path: '/api/cart')]
    public function __invoke(): JsonResponse
    {
        return $this->json(['message' => 'Le panier est validé'], Response::HTTP_CREATED);
    }
}
