# Marketplace Food

Aplicação web de marketplace de comida desenvolvida em ReactJS, seguindo o padrão MVC, com autenticação, CRUD completo de produtos, rotas protegidas, estados globais via Context API, integração com API mock (json-server) e estilização com TailwindCSS.

## Funcionalidades

- Cadastro e login de usuários
- Autenticação e rotas seguras
- CRUD completo de produtos (criar, listar, editar, excluir)
- Página de detalhes do produto
- Carrinho de compras com Context API
- Troca de dados entre rotas via props
- Estados globais com useContext (autenticação e carrinho)
- Integração com API mock (json-server) usando axios
- Estilização responsiva com TailwindCSS

## Tecnologias Utilizadas

- ReactJS
- React Router DOM
- Redux Toolkit
- Context API
- Axios
- TailwindCSS
- json-server

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/jackolvr/marketplace-food
   cd marketplace-comida
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie a API mock (json-server):**
   ```bash
   npm run server
   ```
   O json-server irá rodar em [http://localhost:3001](http://localhost:3001).

4. **Inicie o frontend React:**
   ```bash
   npm start
   ```
   O app estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura de Pastas

```
src/
  components/
  controllers/
  contexts/
  models/
  pages/
  routes/
  services/
  store/
  App.js
  index.js
  index.css
db.json
```

## Usuário de Teste

Você pode usar o seguinte usuário para login:

- **E-mail:** teste@teste.com
- **Senha:** 123456

Ou cadastre um novo usuário pela tela de cadastro.
