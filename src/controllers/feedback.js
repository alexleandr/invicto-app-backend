const feedbackService = require('../services/feedback')

// CONTROLLER FEEDBACK:

// Ler todos os feedbacks
async function getFeedbacks(req, res) {
    try {
        const feedbacks = await feedbackService.getFeedbacks()
        res.status(200).send(feedbacks)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = { getFeedbacks }