const { Model, DataTypes } = require('sequelize'); //Minha classe user, extende a classe Model do sequelize. será um modelo de dados do sequelize, ele precisa ser um modelo de dados para poder ser usado pelo sequelize.

class User extends Model {
    static init(sequelize) { //Método de inicialização do modelo de dados do sequelize.
        super.init({ //Chama o método init da classe pai, que é a classe Model.
            name: DataTypes.STRING, //Define o tipo de dado que será armazenado no campo name.
            email: DataTypes.STRING,     //Define o tipo de dado que será armazenado no campo email.       
        }, {
            sequelize //Passa o objeto sequelize para o método init.
        });
    } //Fim do método init.
} //Fim da classe User.
module.exports = User; //Exporta a classe User para ser usada em outros arquivos do projeto com a função module.exports que é um módulo do node que permite exportar um objeto para outros arquivos do projeto que o importem com a função require. 