const Feedback = require('../models/feedback')

async function getFeedbacks() {
    const feedbacks = await Feedback.find({})
    return feedbacks
}

module.exports = { getFeedbacks }