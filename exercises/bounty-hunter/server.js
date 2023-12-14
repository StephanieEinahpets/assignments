const express = require("express")
const app = express()

app.use(express.json())

app.use("/bounty", require("./bounty.js"))


app.listen(6666, () => {
    console.log("Server is running on port 6666")
})