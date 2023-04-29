require('dotenv').config()

const app = require('express')()
const port = 1406

require('./config/database')

app.get('/', (req, res) => {
    res.send('invicto-app')
})

app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`)
})