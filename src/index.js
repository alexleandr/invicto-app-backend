require('dotenv').config()

const express = require('express')
const cors = require('cors')

require('./config/database')

const app = express()
const port = process.env.PORT ?? 1406

const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const feedbackRouter = require('./routes/feedback')

app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/feedbacks', feedbackRouter)

app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`)
})