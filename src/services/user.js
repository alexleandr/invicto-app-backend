const bcrypt = require('bcrypt')
const User = require('../models/user')

async function registerUser({ nickname, password }) {
  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = new User({
    nickname,
    password: hashedPassword,
  })

  const createdUser = await newUser.save()
  return createdUser
}

module.exports = { registerUser }