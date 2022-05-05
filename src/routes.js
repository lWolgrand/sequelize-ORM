const express = require('express'); //Importa o módulo express para ser usado com a função express() que cria um servidor.

const UserController = require('./controllers/UserController'); //Importa o arquivo UserController.js que contém as rotas para o usuário.
const AddressController = require('./controllers/AddressController'); //Importa o arquivo AddressController.js que contém as rotas para o endereço.

const routes = express.Router(); //Cria uma instância do módulo express.Router() que é um roteador de rotas. O roteador é um objeto que permite que rotas sejam definidas e manipuladas.

routes.get('/users', UserController.index); // Listagem de usuários sendo o index o método que será chamado
routes.post('/users', UserController.store); // Cadastro de usuários sendo o store o método que será chamado. O store é um método que recebe um request e um response.
routes.post('/users/:user_id/addresses', AddressController.store); // Cadastro de endereços sendo o store o método que será chamado. O store é um método que recebe um request e um response.

module.exports = routes; //Exporta o objeto routes para ser usado em outros arquivos do projeto.
