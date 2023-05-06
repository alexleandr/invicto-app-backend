const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const secret = process.env.JWT_SECRET

// SERVICE AUTENTICAÇÃO:

// Gerar token
function generateToken(user) {
  const token = jwt.sign({ id: user._id, nickname: user.nickname }, secret, { expiresIn: '48h' })
  return token
}

// Login usuário
async function loginUser(nickname, password) {
  const user = await User.findOne({ nickname })
  if (!user) {
    throw new Error('Nickname not found')
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    throw new Error('Incorrect password')
  }

  const token = generateToken(user)
  return token
}

module.exports = { loginUser }