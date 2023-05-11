const mongoose = require('mongoose')
const mongoUri = process.env.MONGODB_URI ?? ''

const connection = mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection