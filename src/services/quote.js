const Quote = require('../models/quote')

// SERVICE CITAÇÃO:

// Ler citações
async function getQuotes() {
    const quotes = await Quote.find({})
    return quotes
}

module.exports = { getQuotes }