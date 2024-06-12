<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Post;
use App\Controller\Api\ContactController;
use Symfony\Component\Validator\Constraints as Assert;

#[ApiResource(
    operations: [
        new Post(
            name: 'app_contact',
            controller: ContactController::class,
        )
    ],
)]
class Contact
{
    private ?int $id = null;

    #[Assert\Type('string')]
    #[Assert\NotBlank(message: 'Veuillez entrer votre prénom')]
    #[Assert\Length(
        max: 255, 
        maxMessage: 'Votre prénom doit faire moins de {{ limit }} caractères'
    )]
    private ?string $firstname = null;

    #[Assert\Type('string')]
    #[Assert\NotBlank(message: 'Veuillez entrer votre nom de famille')]
    #[Assert\Length(
        max: 255, 
        maxMessage: 'Votre nom de famille doit faire moins de {{ limit }} caractères'
    )]
    private ?string $lastname = null;

    #[Assert\Type('string')]
    #[Assert\NotBlank(message: 'Veuillez entrer votre adresse email')]
    #[Assert\Email(message: 'Veuillez entrer une adresse email valide')]
    #[Assert\Length(
        max: 255, 
        min: 5,
        minMessage: 'Votre adresse email doit avoir au moins {{ limit }} caractères',
        maxMessage: 'Votre adresse email doit faire moins de {{ limit }} caractères'
    )]
    private ?string $email = null;

    #[Assert\Type('string')]
    #[Assert\Regex(
        pattern: "/^0[1-9]([-. ]?[0-9]{2}){4}$/", 
        message: 'Veuillez entrer un numéro de téléphone valide',
    )]
    private ?string $phone = null;

    #[Assert\Type('string')]
    #[Assert\NotBlank(message: 'Veuillez entrer une description')]
    #[Assert\Length(
        max: 140, 
        min: 10, 
        minMessage: 'Votre description doit avoir au moins {{ limit }} caractères', 
        maxMessage: 'Votre description doit faire moins de {{ limit }} caractères'
    )]
    private ?string $description = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): static
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): static
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }
}
