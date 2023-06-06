const jwt = require('jsonwebtoken')

const userService = require('../services/user')

// CONTROLLER USUÁRIO:

// Registrar usuário
async function registerUser(req, res) {
    try {
        const user = await userService.registerUser(req.body)
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

// Ler dados do usuário
async function getUserData(req, res) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    const decodedToken = jwt.decode(token)
    const userId = decodedToken.id

    try {
        const user = await userService.getUserData(userId)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

// Mudar senha do usuário
async function changeUserPassword(req, res) {
    try {
        const user = await userService.changeUserPassword(req.params.userId, req.body.newPassword)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

// ROTA VÍCIO:

// Registrar vício
async function addViceToUser(req, res) {
    try {
        const user = await userService.addViceToUser(req.params.userId, req.body)
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

// Editar vício
async function updateVice(req, res) {
    try {
        const user = await userService.updateVice(req.params.userId, req.params.viceId, req.body)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

// Deletar vício
async function deleteVice(req, res) {
    try {
        const user = await userService.deleteVice(req.params.userId, req.params.viceId)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = { registerUser, getUserData, changeUserPassword, addViceToUser, updateVice, deleteVice }