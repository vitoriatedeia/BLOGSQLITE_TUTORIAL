const express = require("express"); // Importa lib do Express
const sqlite3 = require("sqlite3"); // Importa lib do sqlite3

const PORT = 8000; // Porta do TCP do servidr HTTP da aplicação

const app = express(); // Instância para o uso do Express

const db = new sqlite3.Database("user.db"); //Instância para uso do Sqlite3, e usa o arquivo 'user.db'

db.serialize(() => {
  // Este método permite enviar comandos SQL em modo 'sequencial'
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)"
  );
});

app.use("/static", express.static(__dirname + "/static"));

// Cria conexão com o banco de dados

const index =
  "<a href='/sobre'>Sobre </a><a href='/cadastro'>Cadastro </a><a href='/login'>Login </a>";
const sobre = 'Você está na página "Sobre"<br><a href="/">Voltar</a>';
const login = 'Você está na página "Login"<br><a href="/">Voltar</a>';
const cadastro = 'Você está na página "Cadastro"<br><a href="/">Voltar</a>';

/*Método express.get necessita de dois parâmetros
Na ARROW FUNCTION, o primeiro são os dados do servidor (REQUISITION - 'req')
o segundo, são os dados que serão enviados ao cliente (RESULT - 'res') */

app.get("/", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:8000/
  res.send(index);
});

app.get("/sobre", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:8000/sobre
  res.send(sobre);
});

app.get("/login", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:8000/login
  res.send(login);
});

app.get("/cadastro", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:8000/cadastro
  res.send(cadastro);
});

//app.listen() deve ser o último comando da aplicação (app.js)
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}!`);
});
