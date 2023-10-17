const Users = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const userCtrl = {
    resgisterUser: async (req, res) => {

        try {
            const { username, email, password } = req.body;
            const user = await Users.findOne({ email: email })
            if (user) {
                return res.status(400).json({ msg: "The email already exist" })

            }
            const passwordHash = await bcrypt.hash(password, 10)
            // res.json({passwordHash})
            // res.json({msg:"signup sucessfull"})
            const newUser = new Users({
                username: username,
                email: email,
                password: passwordHash
            })
            // res.json(newUser)
            await newUser.save()
            res.json({ msg: "signup sucessfull" })

        } catch (err) {
            return res.status(500).json({ msg: err.message })

        }

    },
    loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await Users.findOne({ email: email })
            if (!user) return res.status(400).json({ msf: "user doesnot exist." })

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({ msg: "Incorrect Password" })

            // if login sucessfull creating TokenExpiredError
            const payload = { id: user._id, name: user.username }
            const token = jwt.sign(payload, process.env.TOKEN_SECRET, {expiresIn: "1d" })

            res.json({ token })
            // res.json({ msg: "login a user" })

        } catch (err) {
            res.status(500).json({ msg: err.message })

        }

    },
    verifiedToken:async (req,res)=>{
        try {
            const token = req.header("Authorization")
            if(!token) return res.send(false)
            
            jwt.verify(token,process.env.TOKEN_SECRET, async(err,verfied)=>{
                if(err)return res.send(false)

                const user = await Users.findById(verfied.id)

                if(!user) return res.send(false)
                return res.send(true)

            })
        } catch (err) {
            res.status(400).json({msg:err.message})
            
        }
    }

}

module.exports = userCtrl