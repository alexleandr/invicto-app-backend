const { Router } = require('express')
const { registerUser } = require('../services/user')

const router = Router()

router.post('/', async (req, res) => {
    try {
        const user = await registerUser(req.body)
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router