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

async function changeUserPassword(userId, newPassword) {
  const user = await User.findById(userId)
  if (!user) {
    throw new Error('User not found')
  }

  const hashedNewPassword = await bcrypt.hash(newPassword, 10)

  user.password = hashedNewPassword
  await user.save()

  return user
}

async function addViceToUser(userId, newVice) {
  const user = await User.findById(userId)
  if (!user) {
    throw new Error('User not found')
  }

  user.vices.push(newVice)

  const updatedUser = await user.save()
  return updatedUser
}

async function updateVice(userId, viceId, updates) {
  const user = await User.findById(userId)
  if (!user) {
    throw new Error('User not found')
  }

  const vice = user.vices.find(v => v._id.toString() === viceId)
  if (!vice) {
    throw new Error('Vice not found')
  }

  Object.keys(updates).forEach(key => {
    vice[key] = updates[key]
  })
  await user.save()

  return user
}

module.exports = { registerUser, renameUser, changeUserPassword, addViceToUser, updateVice }