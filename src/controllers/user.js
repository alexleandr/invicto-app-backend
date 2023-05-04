const { Router } = require('express')
const userService = require('../services/user')

const router = Router()

// ROTAS USUÁRIOS:

// Registrar usuário
router.post('/', async (req, res) => {
    try {
        const user = await userService.registerUser(req.body)
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Ler dados do usuário
router.get('/:userId', async (req, res) => {
    try {
        const user = await userService.getUserData(req.params.userId)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Mudar senha do usuário
router.patch('/:userId/password', async (req, res) => {
    try {
        const user = await userService.changeUserPassword(req.params.userId, req.body.password)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

// ROTAS VÍCIOS:

// Registrar vício
router.post('/:userId/vices', async (req, res) => {
    try {
        const user = await userService.addViceToUser(req.params.userId, req.body)
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Ler vícios de um usuário
router.get('/:userId/vices', async (req, res) => {
    try {
        const user = await userService.getUserVices(req.params.userId)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Editar vício
router.put('/:userId/vices/:viceId', async (req, res) => {
    try {
        const user = await userService.updateVice(req.params.userId, req.params.viceId, req.body)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Deletar vício
router.delete('/:userId/vices/:viceId', async (req, res) => {
    try {
        const user = await userService.deleteVice(req.params.userId, req.params.viceId)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router