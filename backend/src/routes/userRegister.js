const express = require('express')
const registerRouter = express.Router()
const User = require('../models/userModle')
const bcrypt = require('bcrypt')


registerRouter.post("/register", (req, res) => {
    const { name, email, password } = req.body
    try {
        bcrypt.hash(password, 5, async(err, hash) => {
            if(err){
                res.send("Something went wrong with hashing" + err)
            }else{
                const user = new User({
                    name,
                    email,
                    password: hash
                })
                await user.save()
                res.send("User registered successfully")
            }
        })
    } catch (error) {
        res.send({msg:error.message})
    }
})


module.exports = registerRouter