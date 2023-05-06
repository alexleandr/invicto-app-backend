const { Router } = require('express')
const feedbackService = require('../services/feedback')
const { verifyToken } = require('../middlewares/verifyToken')

const router = Router()

// ROTAS FEEDBACKS:

// Ler todos os feedbacks
router.get('/', verifyToken, async (req, res) => {
    try {
        const feedbacks = await feedbackService.getFeedbacks()
        res.status(200).send(feedbacks)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router