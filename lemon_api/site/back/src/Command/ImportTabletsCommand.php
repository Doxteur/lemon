<?php 

namespace App\Command;

use App\Entity\Media;
use App\Entity\Product;
use App\Entity\Category;
use App\Service\BaseService;
use App\Entity\Specification;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ImportTabletsCommand extends Command
{
    protected function configure(): void
    {
        $this->setName('import-tablets')
            ->setDescription('Import tablets from a file to the database.')
            ->setHelp('This command allows you to import tablets from a file to the database.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Importing data...');

        try {
            $this->importData();        
            $output->writeln('Data imported successfully.');
            return Command::SUCCESS;
        } catch (\Exception $e) {
            $output->writeln('An error occurred while importing data: ' . $e->getMessage());
            return Command::FAILURE;
        }
    }

    private function importData(): void
    {
        $tablets = BaseService::downloadData('https://gzc-labs.com/ynov/FakeTablettes.json');
    
        foreach ($tablets as $tablet)
        {
            $category = $this->createCategory('Tablettes');
            $specifications = $this->createSpecification($tablet['specifications']);

            foreach ($specifications as $specification) {
                $this->persistData($specification);
            }
            
            $productEntity = $this->createProduct($tablet, $category, $specifications);

            $this->persistData($category);
            $this->persistData($productEntity);
            $this->addImage($tablet, $productEntity);
        }
    }

    private function createCategory($category): Category
    {
        $categoryExist = $this->getDoctrine()->getRepository(Category::class)->findOneBy(['name' => $category]);

        $slug = BaseService::generateSlug($category);

        if (!$categoryExist)
        {
            $categoryEntity = new Category();
            $categoryEntity->setName($category);
            $categoryEntity->setSlug($slug);

            return $categoryEntity;
        }
        return $categoryExist;
    }

    private function createSpecification($specifications)
    {
        $specificationEntities = [];

        foreach ($specifications as $key => $specs)
        {
            $names = explode(', ', $specs);

            foreach ($names as $name) 
            {
                $name = trim($name);

                $key = !$key ? null : $key;

                $specificationExist = $this->getDoctrine()
                    ->getRepository(Specification::class)
                    ->findOneBy(['type' => $key, 'name' => $name]);

                $slug = BaseService::generateSlug($name);

                if (!$specificationExist)
                {
                    $specificationEntity = new Specification();
                    $specificationEntity->setName($name);
                    $specificationEntity->setSlug($slug);
                    $specificationEntity->setType($key);

                    $specificationEntities[] = $specificationEntity;
                }
            }
        }
        return $specificationEntities;
    }

    private function createProduct($tablet, $category, $specifications): Product
    {
        $productExist = $this->getDoctrine()->getRepository(Product::class)->findOneBy(['ean' => $tablet['ean']]);
        
        $slug = BaseService::generateSlug($tablet['name']);

        if (!$productExist)
        {
            $productEntity = new Product();
            $productEntity->setTitle($tablet['name']);
            $productEntity->setSlug($slug);
            $productEntity->setEan($tablet['ean']);
            $productEntity->setDescription($tablet['description']);
            $productEntity->setPrice((float)$tablet['price']);
            $productEntity->setCategory($category);

            foreach ($specifications as $specification) {
                $productEntity->addSpecification($specification);
            }

            return $productEntity;   
        }
        return $productExist;
    }

    private function addImage($tablet, $productEntity): void
    {
        $images = scandir('public/assets/images');
        $images = array_diff($images, array('.', '..'));

        $processedImages = array_filter($images, function($image) use ($tablet) {
            return preg_replace('/_[^_]*\..*/', '', $image) === $tablet['ean'];
        });

        foreach ($processedImages as $image) {

            $existingMedia = $this->getDoctrine()->getRepository(Media::class)->findOneBy(['title' => $tablet['name']]);

            if (!$existingMedia) {
                $media = new Media();
                $media->setTitle($tablet['title']);
                $media->setPath('assets/images/' . $image);
                $media->setAlt($tablet['title']);
                $media->setProduct($productEntity);

                $this->persistData($media);
            }
        }
    }

    private function getContainer(): \Symfony\Component\DependencyInjection\ContainerInterface
    {
        return $this->getApplication()->getKernel()->getContainer();
    }

    private function getDoctrine(): \Doctrine\Persistence\ManagerRegistry
    {
        return $this->getContainer()->get('doctrine');
    }

    private function persistData($data): void
    {
        if ($data)
        {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($data);
            $entityManager->flush();
        }
    }
}