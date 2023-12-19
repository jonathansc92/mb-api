const messages = require('../utils/messages');

module.exports = {
    async registration(req, res) {
        users.users.forEach(function (value) {
            if (req.body.email === value.email && req.body.password === value.password) {
                var token = jwt.sign({ name: value.name, email: value.email }, process.env.SECRET, {
                    algorithm: "HS256",
                    expiresIn: 900 // 15 min
                });

                return res.status(200).send({ auth: true, user: { name: value.name, email: value.email }, message: messages.AUTHENTICATED, token: token });
            } else {
                return res.status(400).send({ auth: false, message: messages.BAD_REQUEST });
            }
        });
    },
}