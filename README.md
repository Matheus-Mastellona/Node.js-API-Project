# Node.js API Project

Este é um projeto de API Node.js que implementa autenticação e operações CRUD para entidades como **User**, **Material**, e **Collection**. O projeto utiliza controladores, modelos e rotas para modularizar funcionalidades e facilitar a expansão e manutenção.

## Estrutura do Projeto

- **controllers/**: Contém os controladores responsáveis pela lógica de negócio e pelas operações realizadas sobre os dados.
  - `authController.js`: Controla a autenticação de usuários, incluindo o registro e o login, gerando tokens de autenticação para acesso seguro.
  - `collectionController.js`: Gerencia as operações CRUD para coleções. Permite adicionar, atualizar, listar e remover coleções da base de dados.
  - `materialController.js`: Controlador para operações CRUD sobre materiais, possibilitando a criação, atualização, listagem e exclusão de materiais.
  - `reportController.js`: Responsável pela geração de relatórios com base em dados das coleções e materiais. 

- **models/**: Modelos de dados que representam as entidades do sistema e facilitam a interação com o banco de dados.
  - `User.js`: Define a estrutura de dados para o usuário, incluindo atributos como nome, email e senha.
  - `Material.js`: Estrutura para armazenar informações sobre materiais, incluindo atributos como nome, tipo e quantidade.
  - `Collection.js`: Representa coleções, com atributos que possibilitam associar materiais a uma coleção específica.

- **middlewares/**: Intermediários que interceptam as requisições para realizar validações e verificar permissões.
  - `authMiddleware.js`: Middleware para verificar tokens de autenticação e assegurar que o usuário tenha permissão para acessar determinadas rotas.

- **routes/**: Define as rotas da API e as associa aos controladores correspondentes.
  - `authRoutes.js`: Inclui rotas para registro e login de usuários.
  - `collectionRoutes.js`: Rotas para operações de CRUD de coleções.
  - `materialRoutes.js`: Rotas para operações de CRUD de materiais.
  - `reportRoutes.js`: Rotas para geração e acesso aos relatórios.

## Pré-requisitos

- Node.js (versão recomendada: 14.x ou superior)
- Banco de dados MySQL

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone <URL do repositório>
   cd <nome do diretório>
2. **Instale as dependências**:
   ```bash
   npm install
3. **Configure o ambiente: Crie um arquivo .env na raiz do projeto com as variáveis necessárias, como abaixo**:
   ```bash
   DB_HOST=seu_host
   DB_USER=seu_usuario
   DB_PASS=sua_senha
   DB_NAME=nome_do_banco_de_dados
   JWT_SECRET=sua_chave_secreta
4. **Inicie o Banco de Dados: Configure o banco MySQL e assegure-se de que ele está em execução**.
   
5. **Execute a aplicação: Para iniciar o servidor, use o comando**:
   ```bash
   npm start
A API estará disponível em http://localhost:3000 ou conforme configurado.

## Uso

A API fornece funcionalidades para gerenciar usuários, materiais e coleções com autenticação baseada em token. Abaixo, a documentação das rotas disponíveis:

### Rotas de Autenticação
- **POST /auth/register**: Cria um novo usuário com as informações fornecidas (nome, email, senha).
- **POST /auth/login**: Realiza o login do usuário e retorna um token de autenticação.

### Rotas de Materiais
- **GET /materials**: Lista todos os materiais.
- **POST /materials**: Cria um novo material com os dados enviados no corpo da requisição.
- **PUT /materials/:id**: Atualiza as informações de um material existente com base no ID.
- **DELETE /materials/:id**: Remove um material com base no ID.

### Rotas de Coleções
- **GET /collections**: Lista todas as coleções.
- **POST /collections**: Cria uma nova coleção.
- **PUT /collections/:id**: Atualiza uma coleção existente com base no ID.
- **DELETE /collections/:id**: Remove uma coleção com base no ID.

### Rotas de Relatórios
- **GET /reports**: Gera relatórios personalizados com base nos dados de coleções e materiais.

## Scripts

No `package.json`, os scripts básicos são:

- **start**: Inicia o servidor em modo de produção.
- **dev**: Inicia o servidor com Nodemon para desenvolvimento, reiniciando automaticamente a cada alteração.

## Dependências Principais

- **Express**: Framework para criação de servidores e rotas.
- **MySQL**: Biblioteca para interação com o banco de dados MySQL.
- **jsonwebtoken**: Utilizado para geração e verificação de tokens de autenticação.
- **bcrypt**: Biblioteca para hashing de senhas.

