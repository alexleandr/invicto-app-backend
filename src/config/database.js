const mongoose = require('mongoose'),
    database = process.env.MONGODB_URI

const connection = mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection