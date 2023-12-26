const { users } = require('../models');
const messages = require('../utils/messages');
const code = require('../utils/statusCode');

module.exports = {
  async registration(req, res) {
    try {
      const user = await users.findOne({
        where: {
          email: req.body.email
        }
      });

      if (user) {
        res.status(code.UNPROCESSABLE).send('O e-mail, já se encontra cadastrado no sistema!');
      }

      await users.create(req.body);

      res.status(code.CREATED).send(messages.CREATED);
    } catch (error) {
      res.status(code.SERVER_ERROR).json({ error: error.message });
    }
  },
}