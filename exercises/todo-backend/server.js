const express = require("express")
const app = express()

app.use(express.json())

app.use("/todo", require("./todo.js"))


app.listen(6666, () => {
    console.log("Server is running on port 6666")
})