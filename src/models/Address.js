const { Model, DataTypes } = require('sequelize');

class Address extends Model {

  static init(sequelize) {
    super.init({
      street: DataTypes.STRING,
      number: DataTypes.STRING,
      zipcode: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}
module.exports = Address;