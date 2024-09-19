#!/bin/bash

# Script para configurar e iniciar o projeto backend e frontend

# Função para verificar se o comando foi bem-sucedido
check_success() {
    if [ $? -ne 0 ]; then
        echo "Ocorreu um erro. Abortando o script."
        exit 1
    fi
}

echo "Iniciando o banco de dados..."
cd ibl-logistica-backend || exit
docker-compose -f docker/docker-compose.yml up -d
check_success

echo "Instalando dependências do backend e gerando chave..."
composer install
check_success
php artisan key:generate
check_success


echo "Rodando as migrations..."
php artisan migrate
check_success

echo "Populando o banco de dados (opcional)..."
php artisan db:seed
check_success

echo "Iniciando o servidor backend..."
php artisan serve &
check_success

# Espera um momento para garantir que o servidor backend tenha iniciado
sleep 5

echo "Iniciando o frontend..."
cd ../ibl-logistica-frontend || exit
npm install
check_success
npm start
check_success

echo "Tudo pronto! O frontend deve estar rodando e o backend também deve estar disponível."

exit 0
