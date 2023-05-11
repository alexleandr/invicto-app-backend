const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET ?? ''

// MIDDLEWARE VERIFICAR TOKEN:

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, secret)
    req.userData = decoded

    next()
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' })
  }
}

module.exports = { verifyToken }