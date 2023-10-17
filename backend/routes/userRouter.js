const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

//Register
router.post('/register',userCtrl.resgisterUser)

//Login
router.post('/login',userCtrl.loginUser)

//verify Token
router.get('/verify',userCtrl.verifiedToken)

module.exports=router