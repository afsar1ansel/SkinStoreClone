const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require("./src/config/db")
const cookieParser = require('cookie-parser')
const product = require('./src/models/product')
const cors = require('cors')

app.use(cors({ origin: ["http://localhost:5173","*","http://localhost:5000"], credentials: true,   }));
app.use(cookieParser())

app.use(express.json())
app.use("/user", require('./src/routes/userRegister'))
app.use("/user", require('./src/routes/login'))
app.use("/user", require('./src/routes/forgotPass'))
app.use("/product", require('./src/routes/getproduct'))
app.use("/product", require('./src/routes/cart'))

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