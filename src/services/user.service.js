const { users } = require('../models');
const messages = require('../utils/messages');
const code = require('../utils/statusCode');
const { returnal, cleanDocument } = require('../utils/helper');

module.exports = {
  async registration(req, res) {
    try {
      req.body.document = cleanDocument(req.body.document);
      req.body.phone = cleanDocument(req.body.phone);

      const user = await users.create(req.body);

      res.status(code.CREATED).json(returnal(messages.CREATED, true, user));
    } catch (error) {
      res.status(code.SERVER_ERROR).json(returnal(error.messages, false));
    }
  },
}