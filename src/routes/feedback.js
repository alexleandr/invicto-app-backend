const { Router } = require('express')

const feedbackController = require('../controllers/feedback')
const { verifyToken } = require('../middlewares/verifyToken')

const router = Router()

// ROTA FEEDBACK:

// Ler todos os feedbacks
router.get('/', verifyToken, feedbackController.getFeedbacks)

module.exports = router