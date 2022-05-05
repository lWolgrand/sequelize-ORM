const express = require('express'); //Importa o módulo express para ser usado com a função express() que cria um servidor.
const routes = require('./routes'); //Importa o arquivo routes.js que contém as rotas para o usuário.
require('./database'); //Importa o arquivo database.js que inicializa o banco de dados.

const app = express(); //Cria uma instância do módulo express.

app.use(express.json()); //Permite que o express entenda json.
app.use(routes); //Permite que as rotas sejam usadas.
app.listen(3000); //Inicia o servidor na porta 3000 ou onde você setar.