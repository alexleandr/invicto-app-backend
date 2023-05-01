const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        maxlength: 16 
    },
    via: { 
        type: String, 
        required: true, 
        maxlength: 16
    },
    user_feedback: { 
        type: String, 
        required: true, 
        maxlength: 228
    }
})

module.exports = mongoose.model('Feedback', FeedbackSchema)