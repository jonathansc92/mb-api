const messages = require('../utils/messages');
const { check, validationResult } = require('express-validator');

const user = () => [
  check('email')
    .notEmpty()
    .withMessage(messages.REQUIRED)
    .bail()
    .isEmail()
    .withMessage(messages.INVALID_MAIL)
    .bail(),
  check('name')
    .notEmpty()
    .withMessage(messages.REQUIRED)
    .bail(),
  check('document')
    .notEmpty()
    .withMessage(messages.REQUIRED)
    .bail()
    .isLength({ min: 11 })
    .withMessage(messages.MIN)
    .bail()
    .isLength({ max: 18 })
    .withMessage(messages.MAX),
  check('date')
    .notEmpty()
    .withMessage(messages.REQUIRED)
    .bail(),
  check('phone')
    .notEmpty()
    .withMessage(messages.REQUIRED)
    .bail(),
  check('password')
    .notEmpty()
    .withMessage(messages.REQUIRED)
    .bail()
    .isLength({ min: 4 })
    .withMessage(messages.MIN)
    .bail()
    .isLength({ max: 15 })
    .withMessage(messages.MAX)
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

const reporter = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);

    return res.status(400).json({
      errors: errorMessages
    });
  }

  next();
}

module.exports = {
  user: [
    user(),
    reporter
  ],
};