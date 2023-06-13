const bcrypt = require('bcrypt')
const User = require('../models/user')

// MIDDLEWARE VERIFICAR SENHA:

async function verifyPassword(req, res, next) {
    const currentPassword = req.body.currentPassword
    const userId = req.params.userId

    const user = await User.findById(userId)
    if (!user) {
      throw new Error('User not found')
    }
  
    await bcrypt.compare(currentPassword, user.password, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' })
      }
      if (!result) {
        return res.status(401).json({ error: 'Incorrect current password' })
      }

      next()
    })
}

module.exports = { verifyPassword }