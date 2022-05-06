'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_techs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { //Para que o usuário seja relacionado com o endereço 
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
      },
      tech_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { //Para que o usuário seja relacionado com o endereço 
          model: 'techs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
      },      
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
