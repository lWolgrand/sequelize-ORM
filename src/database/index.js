const Sequelize = require('sequelize'); //Importa o sequelize.
const dbconfig = require('../config/database'); //Importa o arquivo database.js que contém as configurações do banco de dados.

const User = require('../models/User'); //Importa a classe User do arquivo models/User.js
const Address = require('../models/Address'); 
const Tech = require('../models/Tech');

const connection = new Sequelize(dbconfig); //Cria uma instância do sequelize.

User.init(connection); //Inicializa a classe User.
Address.init(connection); 
Tech.init(connection); 

User.associate(connection.models);
Address.associate(connection.models); 
Tech.associate(connection.models); 

module.exports = connection; 