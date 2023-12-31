## Descrição

Api desenvolvida em NodeJs + Express.

## Decisão da arquitetura utilizada

Neste projeto a ideia era separar as responsabilidades.
Na pasta src temos algumas estruturas de pastas.
- **controllers**: Nesta pasta há um controlador para os alunos, cuja responsabilidade é entregar as requisições da api;
- **routes**: Contém as rotas de chamadas para a api;
- **services**: Nesta pasta há os serviços responsáveis pela regra de negócio e retorno das requisições pela api, que são chamadas pelos controladores;
- **validations**: Esta camada é responsável pelas validações das requisições.

Na raiz da pasta src, há dois arquivos o app.js, importante arquivo que inclui as rotas.

Temos um arquivo para variáveis de ambiente **.env.example**, copie este arquivo e renomeie para **.env**.

O arquivo **server.js**, é neste arquivo que é incluído o **app.js**, responsáveis por iniciarem nossa aplicação.

**tests** - É dentro desta pasta que criamos nossos testes.

## Lista de bibliotecas de terceiros utilizadas

- express; 
- express-validation;
- dotenv; 
- cors;
- jest

## O que você melhoraria se tivesse mais tempo

- Ajustaria a config de banco de dados para pegar as variaveis de ambientes.

## Quais requisitos obrigatórios que não foram entregues

Neste repositório foram entregues todos os requisitos.

## Como executar o projeto
- Na raiz do projeto renomeie o arquivo **.env.example** para **.env**;
- Execute o comando: 
```
    docker-compose up -d
```
- Dentro do container na raiz do projeto, digite o comando abaixo para gerar as tabelas:
```
npx sequelize-cli db:migrate
```

## Rotas
- POST [http://localhost:8080/api/registration](http://localhost:8080/api/registration)
- Payload:
```
{
    "email": "teste@teste.com",
    "name": "Teste MB",
    "document": "111.111.111-11",
    "date": "06/01/1992",
    "phone": "(11) 111111111",
    "password": "1111111111111"
}
```

## Testes

Para executar os testes digite o comando:
```
    npm run test
```
## Autor
- Autor - Jonathan Cruz
- [https://jonathansc92.github.io/jonathancruzdev/?language=ptBr](https://jonathansc92.github.io/jonathancruzdev/?language=ptBr)

