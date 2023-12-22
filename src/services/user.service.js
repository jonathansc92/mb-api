const { user } = require('../models/user');
const messages = require('../utils/messages');

module.exports = {
    async registration(req, res) {
        try {
            const { data } = req.body; // Assuming the date is sent in the request body

            const newUser = await user.create({ data });
        
            // New user has been saved
            console.log('User created:', newUser.toJSON());
            return newUser;
          } catch (error) {
            console.error('Error creating user:', error);
            throw error;
          }
    },
}