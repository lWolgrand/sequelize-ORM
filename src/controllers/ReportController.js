const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        
        const users = await User.findAll({
            where: {
                email: { 
                    [Op.iLike]: '%@plataforma.com'
                }
            }, 
            include: [
                { association: 'addresses' },
                { association: 'techs' }
            ]
        });

        return res.json(users);
    }
}

