const mongoose = require('mongoose')
const database = process.env.MONGODB_URI

const connection = mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection