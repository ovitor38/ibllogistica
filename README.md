## Desafio IBL Logistica

### Esse é o resultado do sistema solicitado pela IBL

O sistema consiste em um CRUD de livros. Nesse desafio foram utilizadas as seguintes tecnologias:

#### API
- PHP
- LARAVEL
- DOCKER
- POSTGRES

#### Front-end
- React
- Typescript
- Prettier
- Eslint

A api é responsavel por tratar os dados e fazer as requisições para o banco de dados. A fim de facilitar o uso localmente, utilizei uma imagem docker para inicializar um banco postgres. 
Em grande parte do código foi utilizado o CLI do Laravel já que o mesmo facilita e agiliza muito o desenvolvimento.

O front-end foi desenvolvido com React e utilizado typescrypt para garantir a tipagem correta e a qualidade do código, além disso também foi utilizado prettier e eslint para uma boa estetica do código e evitar possíveis erros.

Além disso todos os commits foram seguindo as convenções do Conventional commits

## Como utilizar o sistema:

- Criar um arquivo .env e copiar tudo dentro de .env.example para esse novo arquivo

#### Na pasta raiz do projeto há um arquivo que pode ser rodado para executar o projeto automaticamente, basta rodar no seu terminal .
```
./setup.sh
``` 
#### mas caso não funcione você pode roda-los manuelmente

### Api
- Primeiramente deve-se acessar a pasta ibl-logistica-backend

- Iniciar banco de dados, para isso acesse a pasta ibl-logistica-backend e rodo o seguinte comando 
```
docker-compose -f  docker/docker-compose.yml up -d
```

- Instalar as dependencias do backend e gerar uma chave
```
compose install
php artisan key:generate
```

- Rodar as migrations

```
php artisan migrate
```
Caso queira popular o banco de dados, você pode rodar a seed
```
php artisan db:seed
```
-  E finalmente pode iniciar o servidor
```
php artisan serve
```
Se ocorreu tudo bem o servidor deve estar rodando na porta local 8000

### Front-end
- Acessar a pasta ibl-logistica-frontend e instalar as dependencias
```
npm install
```

- Iniciar o servidor 
```
npm start
```
Caso tudo tenha ocorrido normalmente o servidor deve estar rodando na porta local 3000

## Considerações Finais

### Para mim foi um ótimo desafio e fiquei satisfeito com meu resultado. Consegui aprender muita coisa nesses 2 dias que fiz o projeto, principalmente sobre  php e Laravel, tecnologias com as quais nunca havia trabalhado antes e também pude aperfeiçoar minhas habilidades com React, que já venho estudando há um tempo.

### Esse é o resultado de muito esforço e dedicação para esse projeto, espero que possa atender aos requisitos solicitados e a expectativa dos avaliadores. Quaisquer dúvidas podem me contatar

#### Obs: Ficarei muito agredecido se puder(em) fornecer um feedback, seja ele positivo ou negativo.