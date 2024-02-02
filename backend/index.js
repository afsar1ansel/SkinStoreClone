const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require("./src/config/db")
const cookieParser = require('cookie-parser')


app.use(express.json())
app.use(cookieParser())
app.use("/user", require('./src/routes/userRegister'))
app.use("/user", require('./src/routes/login'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT,  async() => {
    try {
        await connectDB();
        console.log(`App listening on port ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})