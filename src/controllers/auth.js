const authService = require('../services/auth')

// CONTROLLER AUTENTICAÇÃO:

// Login usuário
async function loginUser(req, res) {
    try {
        const token = await authService.loginUser(req.body.nickname, req.body.password)
        res.status(200).json({ auth: true, token: token })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { loginUser }