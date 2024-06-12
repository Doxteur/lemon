<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240521095406 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE product_specification (
          product_id INT NOT NULL,
          specification_id INT NOT NULL,
          INDEX IDX_D4D206684584665A (product_id),
          INDEX IDX_D4D20668908E2FFE (specification_id),
          PRIMARY KEY(product_id, specification_id)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE
          product_specification
        ADD
          CONSTRAINT FK_D4D206684584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE
          product_specification
        ADD
          CONSTRAINT FK_D4D20668908E2FFE FOREIGN KEY (specification_id) REFERENCES specification (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04ADBDE4EC11');
        $this->addSql('DROP INDEX IDX_D34A04ADBDE4EC11 ON product');
        $this->addSql('ALTER TABLE product DROP specifications_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product_specification DROP FOREIGN KEY FK_D4D206684584665A');
        $this->addSql('ALTER TABLE product_specification DROP FOREIGN KEY FK_D4D20668908E2FFE');
        $this->addSql('DROP TABLE product_specification');
        $this->addSql('ALTER TABLE product ADD specifications_id INT NOT NULL');
        $this->addSql('ALTER TABLE
          product
        ADD
          CONSTRAINT FK_D34A04ADBDE4EC11 FOREIGN KEY (specifications_id) REFERENCES specification (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_D34A04ADBDE4EC11 ON product (specifications_id)');
    }
}
