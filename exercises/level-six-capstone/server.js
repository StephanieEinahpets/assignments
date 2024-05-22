const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require("express-jwt")


app.use(express.json())
app.use(morgan('dev'))

//removes depreciation error message
mongoose.set('strictQuery', false)

mongoose.connect('mongodb+srv://stephaniemblackman:mbVXrPNDm8HAfi8S@cluster0.fw3v6fd.mongodb.net/', (err) => {
    console.log('Connected to database', err)
})

app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use("/api/shelf", require("./routes/bookRouter"))
app.use("/api/wish", require ("./routes/wishRouter"))



app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(6666, () => {
    console.log("Server is running on port 6666")})