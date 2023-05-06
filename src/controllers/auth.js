const { Router } = require('express')
const authService = require('../services/auth')

const router = Router()

// ROTAS AUTENTICAÇÃO:

// Login usuário
router.post('/login', async (req, res) => {
    try {
        const token = await authService.loginUser(req.body.nickname, req.body.password)
        res.status(200).json({ auth: true, token: token })
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router