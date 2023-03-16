<p align="center">
  <img src="assets/favicon.svg" width="200"" height="94.12" alt="FuelBras" />
</p>

## Descrição

FuelBras é um software que permite às empresas de transporte de cargas calcular o consumo médio de combustível por tonelada transportada de sua frota de caminhões. Com o FuelBras, o usuário preenche informações como a placa, modelo, capacidade do tanque, carga máxima, consumo médio e distância percorrida na jornada de cada veículo, e a aplicação realiza o cálculo automaticamente.

Além disso, o FuelBras apresenta um recurso adicional que mantém um histórico dos últimos cálculos realizados, mesmo após a página ser recarregada, permitindo que o usuário tenha acesso a essas informações sempre que necessário.

Esse repositório contém o código do backend, que é usado pra persistir os dados num banco PostgreSQL.

## Feito usando

- ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
- ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
- ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## Instalação

É necessário ter o node instalado para rodar o projeto. Eu utilizei a versão v16.16.0

Também é necessário ter uma instância do PostgreSQL disponível. Uma vez que o banco esteja funcionando, crie um `.env` se baseando no `.env.example` e execute esses comandos:

```bash
$ npm install
$ npm run migration:run
$ npm run start:dev
```

Após executar esse comando, o app ficará disponível no endereço: `http://localhost:3000/`

## Swagger

O swagger do projeto está disponível em `http://localhost:3000/api` caso o projeto esteja rodando localmente.

O deploy do projeto está disponível em `https://fuel-bras-backend-production.up.railway.app/` e o seu swagger em `https://fuel-bras-backend-production.up.railway.app/api`

## Entre em contato

- Autor - Francisko de Moraes Rezende
- [Linkedin](https://linkedin.com/in/francisko-rezende)
- [Twitter ](https://twitter.com/francisko_r)
- [site pessoal](https://francisko/dev)

## Licença

[MIT](LICENSE).
