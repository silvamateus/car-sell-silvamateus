# car-sell-silvamateus

# Tabela de conteúdos

- [Sobre](#sobre)
- [Solicitação da empresa](#solicitação-da-empresa)
  - [Pontos de atenção](#pontos-de-atenção)
- [Como usar](#como-usar)
- [Docker](#docker)
- [Scripts](#scripts)

## Sobre

Este repositório é um teste técnico feito com Vuejs

## Solicitação da empresa

Criar um sistema que liste anúncios de carros e permita entrar em contato usando o id do anúncio

**Requisitos**

- O teste deve ser realizado em VueJS.

### Pontos de atenção

- A página deve ser responsiva sem a utilização de frameworks css.
- Devemos evitar a utilização de bibliotecas de terceiros (pacotes npm) para
  componentes Vue.
- Está permitido o uso de pré-processadores para o seu css e/ou html.

## Como usar

Para usar em ambiente local faça clone do repositório:

> `https://github.com/silvamateus/car-sell-silvamateus.git`
>
> depois entre no repositório do projeto: `cd car-sell-silvamateus`
>
> E rode o script para instalar as dependências: `npm install ou yarn install`

## Docker

**build**

Para compilar a imagem: `docker build --pull --rm -f "DockerFile" -t carsellsilvamateus:latest "." <`

**rodar**

pare o processo que iniciar e rode: `docker run -p 8080:8080 carsellsilvamateus`

## Scripts

**Para Compilar para ambiente de desenvolvimento (com hot-reload)**

```
yarn serve ou npm run serve
```

**Para compilar e minificar para produção**

```
yarn build ou npm run build
```

**Para fazer lint do código (eslint + prettier)**

```
yarn lint ou npm run link
```

**Para rodar os teste**

```
yarn test:unit ou npm run test:unit
```
