const express = require("express");

const PORT = 8000; // Porta do TCP do servidr HTTP da aplicação

const app = express();

/*Método express.get necessita de dois parâmetros
Na ARROW FUNCTION, o primeiro são os dados do servidor (REQUISITION - 'req'): os egundo, são os dados que serão enviados ao cliente (RESULT - 'res') 

*/
app.get("/", (req, res) => {
  res.send("Olá, SESI!");
});

//app.listen() deve ser o último comando da aplicação (app.js)
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}!`);
});
