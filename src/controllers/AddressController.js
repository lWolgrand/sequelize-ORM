const Address = require('../models/Address');

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { street, number, zipcode } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const address = await Address.create({
      street,
      number,
      zipcode,
      user_id,
    });

    return res.json(address);
  }
}