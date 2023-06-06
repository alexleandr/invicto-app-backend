const bcrypt = require('bcrypt')

const User = require('../models/user')

// SERVICE USUÁRIO:

// Registrar usuário
async function registerUser({ nickname, password }) {
  const existingUser = await User.findOne({ nickname })
  if (existingUser) {
    throw new Error('Nickname already exists')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = new User({
    nickname,
    password: hashedPassword,
  })

  const createdUser = await newUser.save()
  return createdUser
}

// Ler dados do usuário
async function getUserData(userId) {
  const user = await User.findById(userId)
  if (!user) {
    throw new Error('User not found')
  }

  return user
}

// Mudar senha do usuário
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

// SERVICE VÍCIO:

// Registrar vício
async function addViceToUser(userId, newVice) {
  const user = await User.findById(userId)
  if (!user) {
    throw new Error('User not found')
  }

  user.vices.push(newVice)
  await user.save()

  return user
}

// Editar vício
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

// Deletar vício
async function deleteVice(userId, viceId) {
  const user = await User.findById(userId)
  if (!user) {
    throw new Error('User not found')
  }

  const viceIndex = user.vices.findIndex(v => v._id.toString() === viceId)
  if (viceIndex === -1) {
    throw new Error('Vice not found')
  }

  user.vices.splice(viceIndex, 1)
  await user.save()

  return user
}

module.exports = { registerUser, getUserData, changeUserPassword, addViceToUser, updateVice, deleteVice }