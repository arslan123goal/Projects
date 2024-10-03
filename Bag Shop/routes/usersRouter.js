const express = require('express')
const router = express.Router()

const { registerUser, loginUser, logout } = require('../controllers/authController')
const { signupSchema, loginSchema } = require('../validator/authValidator')
const validate = require('../middlewares/validateMiddleware')

router.get('/', function (req, res) {
    res.send('user router')
})


router.post('/register', validate(signupSchema), registerUser)
router.post('/login', validate(loginSchema), loginUser)
router.get('/logout', logout)

module.exports = router