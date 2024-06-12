<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Post;
use App\Controller\Api\CartController;

#[ApiResource(
    operations: [
        new Post(
            name: 'cart_submit',
            controller: CartController::class,
        )
    ],
)]
class Cart
{
    private ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
