const Feedback = require('../models/feedback')

// SERVICE DEPOIMENTO:

// Ler depoimentos
async function getFeedbacks() {
    const feedbacks = await Feedback.find({})
    return feedbacks
}

module.exports = { getFeedbacks }