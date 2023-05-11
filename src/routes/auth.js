const { Router } = require('express')

const authController = require('../controllers/auth')

const router = Router()

// ROTA AUTENTICAÇÃO:

// Login usuário
router.post('/login', authController.loginUser)

module.exports = router