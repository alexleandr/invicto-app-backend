const app = require('express')(),
    port = 1406

app.get('/', (req, res) => {
    res.send('invicto-app1')
})

app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`)
})