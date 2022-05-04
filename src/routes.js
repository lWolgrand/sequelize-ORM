const express = require('express');
const UserController = require('./controllers/UserController');
const routes = express.Router();

routes.get('/users', UserController.index); // Listagem de usuários sendo o index o método que será chamado
routes.post('/users', UserController.store); // Cadastro de usuários sendo o store o método que será chamado

module.exports = routes;
