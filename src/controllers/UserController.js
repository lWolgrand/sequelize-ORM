const User = require('../models/User'); //Importa a classe User do arquivo models/User.js

module.exports = { //Exporta um objeto com as rotas para ser usado em outros arquivos do projeto.

    async index(req, res) { //Método index que será chamado quando o usuário acessar a rota /users.
        const users = await User.findAll(); //Busca todos os usuários no banco de dados.
        return res.json(users); //Retorna os usuários encontrados.
    },
    async store(req, res) { //Método store que será chamado quando o usuário acessar a rota /users.
        const { name, email } = req.body; //Pega os dados do usuário que serão armazenados no banco de dados.

        const user = await User.create({ //Cria um usuário no banco de dados.
            name,
            email,
        }); //Fim do await.

        return res.json(user); //Retorna o usuário criado.
    }
}; //Fim do objeto.