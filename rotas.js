const express = require("express"); // Importa lib do Express
const sqlite3 = require("sqlite3"); // Importa lib do sqlite3
const bodyParser = require("body-parser"); // Importa o body-parser

const app = express(); // Instância para o uso do Express

const PORT = 8000; // Porta do TCP do servidr HTTP da aplicação

//Cria conexão com o banco de dados
const db = new sqlite3.Database("user.db"); //Instância para uso do Sqlite3, e usa o arquivo 'user.db'

db.serialize(() => {
  // Este método permite enviar comandos SQL em modo 'sequencial'
  db.run(
    `CREATE TABLE IF NOT EXISTS users 
    (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, email TEXT, celular TEXT, cpf TEXT, rg TEXT)`
  );
});

// __dirname é a variável interna do nodejs que guarda o caminho absoluto do projeto
//console.log(__dirname + "/static");

// Aqui será acrescentado uma rota "/static" para a pasta __dirname + "/static"
/*O app.use é usado para acrescentar rotas novas para o Express gerenciar e pode usar 
Middleware para isto, que nesse caso é o express.static que gerencia rotas estáticas.*/
app.use("/static", express.static(__dirname + "/static"));

// Middleware para processar as requisições do body parameters do cliente
app.use(bodyParser.urlencoded({ extended: true }));

//Configurar EJS como o motor de visualização
app.set("view engine", "ejs");

// Cria conexão com o banco de dados

const index =
  "<a href='/sobre'>Sobre </a><a href='/cadastro'>Cadastro </a><a href='/login'>Login </a>";
const sobre = 'Você está na página "Sobre"<br><a href="/">Voltar</a>';
const login = 'Você está na página "Login"<br><a href="/">Voltar</a>';
const cadastro = 'Você estpa na página "Cadastro"<br><a href= "/"></a>';

/*Método express.get necessita de dois parâmetros
Na ARROW FUNCTION, o primeiro são os dados do servidor (REQUISITION - 'req')
o segundo, são os dados que serão enviados ao cliente (RESULT - 'res') */

app.get("/", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:8000/
  //res.send(index);
  console.log("GET /index");
  res.redirect("/cadastro"); // Redireciona a ROTA cadastro
});

app.get("/sobre", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:8000/sobre
  console.log("GET /sobre");
  res.render("pages/sobre");
});

app.get("/login", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:8000/login
  console.log("POST /login");
  res.render("pages/login");
});

app.get("/login", (req, res) => {
  console.log("GET /login");
  res.send("Login ainda não implementado.");
});

app.get("/cadastro", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:8000/cadastro
  console.log("GET /cadastro");
  res.render("pages/cadastro");
});

app.get("/dashboard", (req, res) => {
  console.log("GET /dashboard");
});

app.post("/cadastro"),
  (req, res) => {
    // Linha para deourar se está vindo dados no req.body
    console.log("GET /cadastro");
    !req.body
      ? console.log(`Body vazio: ${req.body}`)
      : console.log(JSON.stringify(req.body));

    const { username, passorwd, email, celular, cpf, rg } = req.body;
    // Colocar aqui as validações e inclusão no banco de dados do cadastro do usuário
    //1. Validar dados do usuário
    //2. Saber se le já existe no banco
    const query =
      "SELECT * FROM users WHERE email=? OR cpf=? OR rg=? OR username=?";
    db.get(query, [email, cpf, rg, username], (err, row) => {
      if (err) throw err;
      console.log(`${JSON.stringify(row)}`);
      if (row) {
        //A variável 'row' irá retonar os dados do banco de dados,
        // executado através do SQL, variável query
        res.send("Usuário já cadastrado, refaça o cadastro");
      } else {
        //3. Se o usuário não existe no banco cadastrar
        const insertQuery =
          "INSERT INTO users (username, password, email, celular, cpf, rg) VALUES (?,?,?,?,?,?)";
        db.run(
          insertQuery,
          [username, password, email, celular, cpf, rg],
          (err) => {
            //Inserir a lógica do INSERT
            if (err) throw err;
            res.send("Usuário cadastrado com sucesso");
          }
        );
      }
    });
  };

//   res.send(
//     `Bem-vindo usuário: ${req.body.username}, seu email é ${req.body.email}`
//   );
// });

//app.listen() deve ser o último comando da aplicação (app.js)
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}!`);
});
