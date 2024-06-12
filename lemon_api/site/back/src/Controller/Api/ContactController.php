<?php

namespace App\Controller\Api;

use App\Entity\Contact;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mailer\MailerInterface;

#[AsController]
class ContactController extends AbstractController
{
    public function __construct(private MailerInterface $mailer)
    {


    }
    
    #[Route( name: 'app_contact', methods: ['POST'], path: '/api/contact')]
    public function __invoke(Request $request, ValidatorInterface $validator): JsonResponse
    {
        $data = $request->toArray();

        $contact = new Contact();
        $contact->setFirstname($data['firstname']??null);
        $contact->setLastname($data['lastname']??null);
        $contact->setEmail($data['email']??null);
        $contact->setPhone($data['phone']??null);
        $contact->setDescription($data['description']??null);
        
        $errors = $validator->validate($contact);

        if (count($errors) > 0) {
            // $serializer = new ErrorNormalizer();    
            // // $serializer->normalize($errors);
            
            $serializedErrors = [];
            foreach ($errors as $error) {
                $serializedErrors[] = [
                    'errorMessage' => $error->getMessage(),
                    'name' => $error->getPropertyPath(),
                ];
            }
            return $this->json($serializedErrors, Response::HTTP_BAD_REQUEST);
        }

        $email = (new TemplatedEmail())
            ->from('no-reply@yuzu.com')
            ->to('admin@yuzu.com')
            ->subject('Message dans le formulaire de contact')
            ->text('Informations dans le formulaire de contact')
            ->htmlTemplate('emails/adminNotification.html.twig')
            ->context(["data"=>$contact])
            ;

        $this->mailer->send($email);

        return new JsonResponse(['message' => 'Super']);
    }
}
