const { Router } = require('express')

const userController = require('../controllers/user')

const { verifyToken } = require('../middlewares/verifyToken')
const { verifyPassword } = require('../middlewares/verifyPassword')

const router = Router()

// ROTA USUÁRIO:

// Registrar usuário
router.post('/', userController.registerUser)

// Ler dados do usuário
router.get('/me', verifyToken, userController.getUserData)

// Mudar senha do usuário
router.patch('/:userId/password', verifyToken, verifyPassword, userController.changeUserPassword)

// ROTA VÍCIO:

// Registrar vício
router.post('/:userId/vices', verifyToken, userController.addViceToUser)

// Ler vícios de um usuário
router.get('/:userId/vices', verifyToken, userController.getUserVices)

// Editar vício
router.put('/:userId/vices/:viceId', verifyToken, userController.updateVice)

// Deletar vício
router.delete('/:userId/vices/:viceId', verifyToken, userController.deleteVice)

module.exports = router