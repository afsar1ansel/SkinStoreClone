const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./config/db')


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT,  async() => {
    try {
        await connectDB()
        console.log(`Example app listening on port ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})