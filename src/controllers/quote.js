const quoteService = require('../services/quote')

// CONTROLLER CITAÇÃO:

// Ler todos as citações
async function getQuotes(req, res) {
    try {
        const quotes = await quoteService.getQuotes()
        res.status(200).send(quotes)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = { getQuotes }