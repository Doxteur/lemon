<?php

namespace App\Normalizer;

use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class ErrorNormalizer implements NormalizerInterface
{
    public function __construct(private ObjectNormalizer $normalizer)
    // public function __construct(private NormalizerInterface $normalizer)
    {
    }

    public function normalize($object, $format = null, array $context = []): array
    {
        $data = $this->normalizer->normalize($object);
        
        $data['code'] = $object->getCode();
        $data['name'] = $object->getPropertyPath();
        $data['errorMessage'] = $object->getMessage();

        return $data;
    }

    public function supportsNormalization($data, $format = null): bool
    {
        return $data instanceof \App\Entity\Contact;
    }
}