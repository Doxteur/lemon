# Lemon

## Règle git

Comment nommer ma branche ?
- branche feature: "feat-yzu-<ID_DU_Ticket_JIRA>
- branche fix: "hotfix-<NOM_DE_LA_BRANCHE>

## Init

## BACK

### Mise en 
Renomer le .env.exemple -> .env
```bash
doocker compose up -d
# Aller dans le conteneur WEB
composer i;
php bin/console lexik:jwt:generate-keypair --overwrite -q;
php bin/console assets:install; 
npm i && npm run build;
```

```bash
php bin/console d:d:d -q;
php bin/console d:d:c -q;
php bin/console d:m:m -q;
php bin/console d:f:l -q;
# Import des produits
php bin/console import-products && php bin/console import-tablets;
```

[Lien pour le swagger UI](http://localhost:8010/api)

## FRONT

### CLIENT

```bash
$ cd client
$ yarn
```