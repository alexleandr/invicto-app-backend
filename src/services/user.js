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

async function renameUser(userId, newNickname) {
  const user = await User.findById(userId)
  if (!user) {
    throw new Error('User not found')
  }

  user.nickname = newNickname
  await user.save()

  return user
}

module.exports = { registerUser, renameUser }