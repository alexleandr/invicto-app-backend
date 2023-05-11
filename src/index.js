require('dotenv').config()

const express = require('express')
require('./config/database')

const app = express()
const port = process.env.PORT ?? 1406

const authController = require('./controllers/auth')
const userController = require('./controllers/user')
const feedbackController = require('./controllers/feedback')

app.use(express.json())

app.use('/auth', authController)
app.use('/users', userController)
app.use('/feedbacks', feedbackController)

app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`)
})