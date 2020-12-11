# Autista na Escola

<img src="img/autista-na-escola-img.png" width="610"/> 

## Sumário
<!--ts-->
   * [Descrição](#Descrição)
   * [Aprendizados](#Aprendizado)
   * [Linguagens, ferramentas e dependêncas](#Linguagens-ferramentas-e-dependêncas)
   * [Como iniciar a aplicação na sua máquina](#Como-iniciar-a-aplicação-na-sua-máquina)
   * [Estrutura do projeto](#Estrutura-do-projeto)
   * [Endpoints](#Endpoints)
   * [Modelo de preenchimento de campos](#Modelo-de-preenchimento-de-campos)
   * [Contato](#Contato)

## Descrição

API desenvolvida para o projeto final do curso de Back-End da [{reprograma}](https://reprograma.com.br/) em parceria com a [XP.inc](https://www.xpinc.com/).<br>

A **Autista na Escola** é uma API de cadastro e busca de escolas que trabalham o desenvolvendo e aprendizagem das crianças com Trantorno do Espectro Autista(TRE).<br><br>
**O objetivo** é auxiliar as famílias a encontrarem uma instituição de forma mais fácil e rápida, evitando a mudança desnecessária de rotina na vida da criança. Segundo a Faculdade de Medicina da Universidade Federal de Minas Gerais[(UFMG)](https://www.medicina.ufmg.br/atividades-virtuais-durante-a-pandemia-sao-desafios-para-criancas-com-autismo/), "com mudanças na rotina, pessoas com TEA podem apresentar alterações no padrão do sono, maior ansiedade e irritabilidade. Apesar de não serem sintomas comuns apenas às pessoas com autismo, os impactos podem ser sentidos de maneira mais intensa por elas."

## Aprendizados

Para construir esse projeto utilizei conteúdos aprendidos nos **4 meses** de curso, sendo ensinados pelas professoras ou através de monitoras ex-alunas do curso que compartilhavam conhecimento.<br><br>
`Lógica de programação`, `JavaScript`, `Node.js`, `CRUD(Create, Read, Update, Delete)`, `API REST`, `Try Catch`, `Funções Assíncronas`, `Banco de dados NoSQL(MongoDB)`, `Padrão MVC`, `Autenticação`. 

## Linguagens, ferramentas e dependêncas

Para a construção do projeto, foi utilizado:

 - [nodejs](https://nodejs.org/)
 - [mongodb](https://www.mongodb.com/)
 - [npm](https://www.npmjs.com/)
 - [nodemon](https://www.npmjs.com/package/nodemon)
 - [mongoose](https://www.npmjs.com/package/mongoose)
 - [express](https://www.npmjs.com/package/express)
 - [cors](https://www.npmjs.com/package/cors)
 - [body-parser](https://www.npmjs.com/package/body-parser)
 - [dotenv](https://www.npmjs.com/package/dotenv)
 - [bcrypt](https://www.npmjs.com/package/bcrypt)
 - [jwt](https://jwt.io/)
 - [VSCode](https://code.visualstudio.com/)



## Como iniciar a aplicação na sua máquina

- Cerifique-se de ter o `node.js` instalado.
- No terminal rode o comando `npm install`.
- Quando suas dependências estiverem instaladas, inicie o terminal com `npm start`.

## Estrutura do projeto

```bash

        \--📂 AUTISTA-NA-ESCOLA
            \--📂 img   
            \--📂 node_modules
            \--📂src
                |
                📂---controller
                |      admController.js
                |      reviewController.js
                |      schoolController.js
                |      userlController.js        
                |
                📂---middlewares
                |      authAdm.js
                |      reviewController.js
                |
                📂---model
                |      accountSchema.js
                |      reviewSchema.js
                |      schoolSchema.js      
                |
                📂---routes
                |      index.js
                |      admRoutes.js
                |      schoolRoutes.js
                |      userRoutes.js
                |      reviewRoutes.js
                   
            |   .env
            |   .env.example
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   README.MD
            |   server.js

```


## Endpoints

Método | Caminho | Acesso | Descrição
------ | ------- | ------- | ---------:
POST | /accounts/adm/signup | Livre | Cria uma conta de administrador e retorna um **token de autenticação**.
POST | /accounts/adm/login | Livre | Realiza login de admnistrador e retorna um **token de autenticação**.
GET | /accounts/adm/all | Administrador | Retorna todas as contas cadastradas na plataforma.
POST | /accounts/signup | Usuários cadastrados | Cria uma conta de usuário e retorna um **token de autenticação**.
POST | /accounts/login | Usuários cadastrados | Realiza login de usuário e retorna um **token de autenticação**.
GET | /schools/ | Usuários cadastrados | Retorna todas as escolas cadastradas
GET | /schools/tovalidate | Administrador | Retorna todas as escolas cadastradas que devem ser validadas pelo administrador.
POST | /schools/create | Usuários cadastrados | Adiciona uma nova escola.
GET | /schools/state | Usuários cadastrados| Busca as escolas por estado através de **Query Params**.
DELETE | /schools/:id | Administrador | Deleta a escola passada por id.
PUT | /schools/:id | Administrador| Altera uma escola.
POST| /review/:id | Usuário | Adiciona uma avaliação sobre a escola.
GET| /review/:id | Usuário | Retorna as avaliações.<br><br>


## Modelo de preenchimento de campos

### Cadastrar usuário

```
{
    "name": "Beatriz",
    "lastName": "Santos",
    "email": "bia@gmail.com",
    "password": "123"
}
```

### Login

```
{
    "email": "bia@gmail.com",
    "password": "123"
}
```


### Cadastrar escola

```
{
    "name": "xxxxxx",
    "state": "pa",
    "city": "belém",
    "address": "xxxxxx",
    "phonenumber": "(xx) xxx-xxx",
    "review": "Meu filho estuda nessa escola, é a única que conheço que da estrutura para crianças especiais."
}
```

### Avaliar escola

```
{
    "rate": 5,
    "comment": "Adoro essa escola."
}
```

#### Contato
- nathaliacsan@gmail.com
