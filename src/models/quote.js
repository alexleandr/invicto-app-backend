const mongoose = require('mongoose')

// MODEL CITAÇÃO:

const QuoteSchema = new mongoose.Schema({
    phrase: {
        type: String,
        unique: true,
        maxlenght: 72
    },
    day: {
        type: Number,
        unique: true
    }
})

module.exports = mongoose.model('Quote', QuoteSchema)