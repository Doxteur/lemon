<?php 

namespace App\Command;

use App\Entity\Media;
use App\Entity\Product;
use App\Entity\Category;
use App\Service\BaseService;
use App\Entity\Specification;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\String\Slugger\AsciiSlugger;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ImportTabletsCommand extends Command
{
    public function __construct(private ValidatorInterface $validator)
    {
        parent::__construct();
    }

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
        $tablets = BaseService::downloadData('FakeTablettes.json');
    
        foreach ($tablets as $tablet)
        {
            $category = $this->createCategory('Tablettes');
            $specifications = $this->createSpecification($tablet->specifications);

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
        $slugger = new AsciiSlugger();
        $slug = $slugger->slug($category);

        $categoryEntity = new Category();
        $categoryEntity->setName($category);
        $categoryEntity->setSlug($slug);

        $errors = $this->validator->validate($categoryEntity);

        if (count($errors) > 0) {
            $categoryEntity = $this->getDoctrine()->getRepository(Category::class)->findOneBy(['slug' => $slug]);
        }

        return $categoryEntity;
    }

    private function createSpecification($specifications)
    {
        $specificationEntities = [];
        
        $slugger = new AsciiSlugger();

        foreach ($specifications as $key => $specs)
        {
            $names = explode(', ', $specs);

            foreach ($names as $name) 
            {
                $name = trim($name);

                $key = !$key ? null : $key;

                $slug = $slugger->slug($name);

                $specificationEntity = new Specification();
                $specificationEntity->setName($name);
                $specificationEntity->setSlug($slug);
                $specificationEntity->setType($key);

                $errors = $this->validator->validate($specificationEntity);

                if (count($errors) < 1) {
                    $specificationEntities[] = $specificationEntity;
                }
            }
        }
        return $specificationEntities;
    }

    private function createProduct($tablet, $category, $specifications): Product
    {        
        $slugger = new AsciiSlugger();
        $slug = $slugger->slug($tablet->name);

        $productEntity = new Product();
        $productEntity->setTitle($tablet->name);
        $productEntity->setSlug($slugger->slug($tablet->name));
        $productEntity->setEan($tablet->ean);
        $productEntity->setDescription($tablet->description);
        $productEntity->setPrice((float)$tablet->price);
        $productEntity->setCategory($category);

        foreach ($specifications as $specification) {
            $productEntity->addSpecification($specification);
        }

        $errors = $this->validator->validate($productEntity);

        if (count($errors) > 0) {
            $productEntity = $this->getDoctrine()->getRepository(Product::class)->findOneBy(['slug' => $slug]);
        }
        return $productEntity;
    }

    private function addImage($tablet, $productEntity): void
    {
        $images = scandir('public/assets/images');
        $images = array_diff($images, array('.', '..'));

        $processedImages = array_filter($images, function($image) use ($tablet) {
            return preg_replace('/_[^_]*\..*/', '', $image) === $tablet->ean;
        });

        foreach ($processedImages as $image) {
            $path = 'assets/images/' . $image; 

            $media = new Media();
            $media->setTitle($tablet->name);
            $media->setPath($path);
            $media->setAlt($tablet->name);
            $media->setProduct($productEntity);

            $errors = $this->validator->validate($media);

            if (count($errors) > 0) {
                $media = $this->getDoctrine()->getRepository(Media::class)->findOneBy(['path' => $path]);
            }
            $this->persistData($media);
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