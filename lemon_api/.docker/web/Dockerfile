FROM php:8.1-apache

# Install system dependencies
RUN apt-get update \
    && apt-get install -y \
        libicu-dev \
        libpq-dev \
        libzip-dev \
        unzip \
        git \
        cron \
        nano \
        supervisor

# Install PHP extensions
RUN docker-php-ext-install \
    intl \
    pdo \
    pdo_pgsql \
    zip \
    pdo \
    pdo_mysql \
    opcache

# Install XDEBUG, APCU
RUN pecl install xdebug apcu
RUN docker-php-ext-enable xdebug apcu

# Install symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony5/bin/symfony /usr/local/bin/symfony

# Install Composer CLI
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


# You can add your own aliases here
RUN echo 'alias console="php /var/www/html/back/bin/console"' >> ~/.bashrc
RUN echo 'alias phpstan="/var/www/html/back/vendor/phpstan/phpstan/phpstan"' >> ~/.bashrc
RUN echo 'alias dsu="/var/www/html/back/bin/console d:s:u --force --complete"' >> ~/.bashrc

RUN echo "umask 0000" >> /root/.bashrc

# On installe node : https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions
ARG NODE_VERSION
RUN curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - \
	&& apt-get install -y nodejs
RUN curl -O -L https://npmjs.org/install.sh && sh install.sh

# Ajoute un utilisateur
RUN useradd worker -u 1000 -m -s /bin/bash
USER worker

# Set the working directory inside the container
WORKDIR /var/www/html/back
