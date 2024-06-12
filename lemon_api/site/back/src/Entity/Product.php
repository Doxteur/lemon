<?php

namespace App\Entity;

use Instacar\ExtraFiltersBundle\Doctrine\Orm\Filter\ExpressionFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\ProductRepository;
use ApiPlatform\Metadata\GetCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_SLUG', fields: ['slug'])]
#[UniqueEntity(fields: ['slug'], message: 'Ce slug existe déjà.')]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection()
    ],
    paginationItemsPerPage: 10,
    normalizationContext: ['groups' => ['product_read']],
)]
#[ApiFilter(ExpressionFilter::class, properties: [
    'search' => 'orWhere(search("title", "partial"), search("specification.name", "partial"), search("specification.slug", "partial"), search("slug", "partial"), search("description", "partial"), search("ean", "partial"))',
    'category' => 'search("category.slug", "exact")',

])]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[ApiProperty(identifier: false)]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['product_read'])]
    private ?string $title = null;

    #[ORM\Column(length: 255)]
    #[ApiProperty(identifier: true)]
    #[Groups(['product_read'])]
    private ?string $slug = null;

    #[ORM\Column(length: 30)]
    #[Groups(['product_read'])]
    private ?string $ean = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['product_read'])]
    private ?string $description = null;

    #[ORM\Column]
    #[Groups(['product_read'])]
    private ?float $price = null;

    #[ORM\ManyToOne(inversedBy: 'products')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['product_read'])]
    private ?Category $category = null;

    /**
     * @var Collection<int, Media>
     */
    #[ORM\OneToMany(mappedBy: 'product', targetEntity: Media::class)]
    #[Groups(['product_read'])]
    private Collection $images;

    /**
     * @var Collection<int, Specification>
     */
    #[ORM\ManyToMany(targetEntity: Specification::class, inversedBy: 'products')]
    #[Groups(['product_read'])]
    private Collection $specifications;

    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->specifications = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }

    public function getEan(): ?string
    {
        return $this->ean;
    }

    public function setEan(string $ean): static
    {
        $this->ean = $ean;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return Collection<int, Media>
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Media $image): static
    {
        if (!$this->images->contains($image)) {
            $this->images->add($image);
            $image->setProduct($this);
        }

        return $this;
    }

    public function removeImage(Media $image): static
    {
        if ($this->images->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getProduct() === $this) {
                $image->setProduct(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Specification>
     */
    public function getSpecifications(): Collection
    {
        return $this->specifications;
    }

    public function addSpecification(Specification $specification): static
    {
        if (!$this->specifications->contains($specification)) {
            $this->specifications->add($specification);
        }

        return $this;
    }

    public function removeSpecification(Specification $specification): static
    {
        $this->specifications->removeElement($specification);

        return $this;
    }
}
