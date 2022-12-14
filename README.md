<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


#
# Getting started with Movie API

## .env

```bash
JWT_SECRET=
# create a super secret password

POSTGRES_HOST=
# database host
# Locally, use: localhost
# With Docker, use: db_movie

POSTGRES_USERNAME=
# database username

POSTGRES_PASSWORD=
# database password

POSTGRES_PORT=
# database port, POSTGRES default: 5432

POSTGRES_DATABASE=
# database name

DATABASE_URL=
# postgresql://<user>:<password>@<host>:<port>/<database_name>

PORT=
# application port, default is 3000
```

## Installation

```bash
$ npm install
```

## Create database locally

```bash
$ psql -U postgres -p 5432 -h localhost
$ create database database_name
```

## Running the app locally

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app with Docker

```bash
$ docker-compose up
```

## Create database on Docker

```bash
$ psql -U postgres -p 2345 -h localhost
$ create database database_name
$ docker-compose down && docker-compose up
```

#

## Experiences
- Node.js: since 06/2022
- TypeScript: since 07/2022
- NestJS: since 11/2022
- SQL: since 01/2012
- Docker: since 10/2022
- Redis: since 11/2022

#

## References
- https://typeorm.io
- https://docs.nestjs.com
- https://docs.docker.com/engine/install/ubuntu/
- https://www.youtube.com/watch?v=YHpG6t91oW8
- https://www.youtube.com/watch?v=QOMiiZ8CUYM

#