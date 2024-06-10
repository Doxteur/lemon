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

class ImportProductsCommand extends Command
{
    protected function configure(): void
    {
        $this->setName('import-products')
            ->setDescription('Import products from a file to the database.')
            ->setHelp('This command allows you to import products from a file to the database.');
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
        $products = BaseService::downloadData('https://gzc-labs.com/ynov/FakeProducts.json');
    
        foreach ($products as $product)
        {
            $category = $this->createCategory($product['category']);
            $specification = $this->createSpecification($product['specs']);
            $productEntity = $this->createProduct($product, $category, $specification);

            $this->persistData($category);
            $this->persistData($specification);
            $this->persistData($productEntity);
            $this->addImage($product, $productEntity);
        }
    }

    private function createCategory($category): Category
    {
        $categoryExist = $this->getDoctrine()->getRepository(Category::class)->findOneBy(['name' => $category]);

        if (!$categoryExist)
        {
            $categoryEntity = new Category();
            $categoryEntity->setName($category);
            $categoryEntity->setSlug(strtolower($category));

            return $categoryEntity;
        }
        return $categoryExist;
    }

    private function createSpecification($specification): Specification
    {
        $specificationExist = $this->getDoctrine()->getRepository(Specification::class)->findOneBy(['name' => $specification]);

        if (!$specificationExist)
        {
            $specificationEntity = new Specification();
            $specificationEntity->setName($specification);
            $specificationEntity->setSlug(strtolower($specification));
            $specificationEntity->setType('');

            return $specificationEntity;
        }
        return $specificationExist;
    }

    private function createProduct($product, $category, $specification): Product
    {
        $productExist = $this->getDoctrine()->getRepository(Product::class)->findOneBy(['ean' => $product['ean']]);
        
        $slug = BaseService::generateSlug($product['title']);

        if (!$productExist)
        {
            $productEntity = new Product();
            $productEntity->setTitle($product['title']);
            $productEntity->setSlug($slug);
            $productEntity->setEan($product['ean']);
            $productEntity->setDescription($product['description']);
            $productEntity->setPrice($product['prix']);
            $productEntity->setCategory($category);
            $productEntity->addSpecification($specification);

            return $productEntity;   
        }
        return $productExist;
    }

    private function addImage($product, $productEntity): void
    {
        $images = scandir('public/assets/images');
        $images = array_diff($images, array('.', '..'));

        $processedImages = array_filter($images, function($image) use ($product) {
            return preg_replace('/_[^_]*\..*/', '', $image) === $product['ean'];
        });

        foreach ($processedImages as $image) {

            $existingMedia = $this->getDoctrine()->getRepository(Media::class)->findOneBy(['title' => $product['title']]);

            if (!$existingMedia) {
                $media = new Media();
                $media->setTitle($product['title']);
                $media->setPath('assets/images/' . $image);
                $media->setAlt($product['title']);
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