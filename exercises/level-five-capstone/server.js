const express = require("express")
const app = express()
const mongoose  = require('mongoose')

app.use(express.json())

app.use("/api/shelf", require("./routes/bookRouter"))

app.use("/api/wish", require ("./routes/wishRouter"))

main().catch( err => console.log(err) )

async function main() {
    await mongoose.connect("mongodb://localhost:27017/Library")
}

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(6666, () => {
    console.log("Server is running on port 6666")})