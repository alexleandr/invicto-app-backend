require('dotenv').config()

const express = require('express')
require('./config/database')

const app = express()
const port = process.env.PORT ?? 1406

const authController = require('./controllers/auth')
const userRouter = require('./routes/user')
const feedbackController = require('./controllers/feedback')

app.use(express.json())

app.use('/auth', authController)
app.use('/users', userRouter)
app.use('/feedbacks', feedbackController)

app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`)
})