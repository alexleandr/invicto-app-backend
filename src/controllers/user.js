const { Router } = require('express')
const userService = require('../services/user')

const router = Router()

router.post('/', async (req, res) => {
    try {
        const user = await userService.registerUser(req.body)
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.patch('/:userId/rename', async (req, res) => {
    try {
        const user = await userService.renameUser(req.params.userId, req.body.nickname)
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.patch('/:userId/password', async (req, res) => {
    try {
        const user = await userService.changeUserPassword(req.params.userId, req.body.password)
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/:userId/vices', async (req, res) => {
    try {
        const user = await userService.addViceToUser(req.params.userId, req.body)
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put('/:userId/vices/:viceId/update', async (req, res) => {
    try {
        const user = await userService.updateVice(req.params.userId, req.params.viceId, req.body)
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router