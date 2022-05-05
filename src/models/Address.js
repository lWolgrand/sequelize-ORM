const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  static init(sequelize) {
    super.init({
      street: DataTypes.STRING,
      number: DataTypes.STRING,
      zipcode: DataTypes.STRING,
    }, {
      sequelize
    });
  }
}
module.exports = Address;