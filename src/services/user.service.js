const { users } = require('../models');
const messages = require('../utils/messages');
const code = require('../utils/statusCode');
const { returnal } = require('../utils/helper');

module.exports = {
  async registration(req, res) {
    try {
      const user = await users.create(req.body);

      res.status(code.CREATED).json(returnal(messages.CREATED, true));
    } catch (error) {
      res.status(code.SERVER_ERROR).json(returnal(error.messages, false));
    }
  },
}