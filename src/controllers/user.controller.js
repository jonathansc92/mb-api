const userService = require("../services/user.service");

module.exports = {
    async registration(req, res) {
        return await userService.registration(req, res);
    },
}