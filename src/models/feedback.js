const mongoose = require('mongoose')

// MODEL DEPOIMENTO:

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
    message: { 
        type: String, 
        required: true, 
        maxlength: 228
    }
})

module.exports = mongoose.model('Feedback', FeedbackSchema)