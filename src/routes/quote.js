const { Router } = require('express')

const quoteController = require('../controllers/quote')
const { verifyToken } = require('../middlewares/verifyToken')

const router = Router()

// ROTA CITAÇÃO:

// Ler todos as citações
router.get('/', verifyToken, quoteController.getQuotes)

module.exports = router